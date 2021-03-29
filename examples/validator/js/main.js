import  ListItem from './classes/list-item.js';
import Human from './classes/human.js'
import { Validator } from "./library/validator.js";
import { formGroupConfig } from "./configs/form-config.js"

let humanContainer = document.getElementById('human-container');
const humanList = new ListItem(humanContainer);
let form = document.querySelector('#human-form');

let btnAddStart = document.getElementById('btn-add-start');
let btnAddEnd = document.querySelector('#btn-add-end');
let btnRemove = document.querySelector('#btn-remove');

btnRemove.onclick = function () {
    humanList.removeById(5);
}

btnAddEnd.onclick = function () {
    let id = ++Human.count;

    humanList.add(
        new Human({
            firstName: `name: ${id}`,
            lastName: `surname: ${id}`,
            id
        }),
        'end'
    )
}

btnAddStart.onclick = function () {
    const VALID = Validator.validate(formGroupConfig, form);
    
    if(!VALID) {
        console.log(Validator.errors);
        Object.entries(Validator.errors).forEach(([name, error]) => {
            console.log(name, error);
            let messageError = form.querySelector(`[data-for="${name}"]`);
            form.elements[name].classList.add('error');
            messageError.innerHTML = Object.values(error || {}).map(message => `<span>${message}</span>`).join('')
            messageError.style.display = 'block';
        } )
    } else {

        let formData = {};
        [...form.elements].forEach(({name, value} )=> {
            formData[name] = value;
        })

        console.log(formData);
        // ...
        let id = ++Human.count;
        humanList.add(
            new Human({
                firstName: formData['first-name'],
                lastName: formData['last-name'],
                id
            }),
            'start'
        )
    }
}

form.addEventListener('input', function(e) {
    let target = e.target;
    
    if(!Object.keys(formGroupConfig).includes(target.name)) return;

    let messageError = form.querySelector(`[data-for="${target.name}"]`);
    const VALID = Validator.validate({ [target.name] : formGroupConfig[target.name]}, form);
    
    if(VALID) {
        target.classList.remove('error');
        target.classList.add('success');
        messageError.innerHTML = null;
        messageError.style.display = 'none';
    } else {
        target.classList.remove('success');
        target.classList.add('error');
        messageError.innerHTML = Object.values(Validator.errors[target.name]).map(message => `<span>${message}</span>`).join('')
        messageError.style.display = 'block';
    }

})