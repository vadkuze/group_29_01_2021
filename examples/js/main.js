import  ListItem from './classes/list-item.js';
import { Validator } from "./library/validator.js";
import { formGroupConfig } from "./configs/form-config.js"

let humanContainer = document.getElementById('human-container');
const humanList = new ListItem(humanContainer);

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
    let form = document.querySelector('#human-form');
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
        // ...
        humanList.add(
            new Human({
                firstName: `name: ${id}`,
                lastName: `surname: ${id}`,
                id
            }),
            'start'
        )
    }
}