import  ListItem from './classes/list-item.js';
import StoreService from "./services/store.service.js";
import { isNotEmpty } from "./library/validator.js";
import Validator from "./library/validator.js";


let store = new StoreService();

// class Table extends StoreService{}
console.log(ListItem);

let humanContainer = document.getElementById('human-container');

const humanList = new ListItem(humanContainer);


let btnAddStart = document.getElementById('btn-add-start');
let btnAddEnd = document.querySelector('#btn-add-end');
let btnRemove = document.querySelector('#btn-remove');

btnRemove.onclick = function () {
    humanList.removeById(5);
}

// btnAddStart.onclick = function () {
//     let id = ++Human.count;
    
//     humanList.add(
//         new Human({
//             firstName: `name: ${id}`,
//             lastName: `surname: ${id}`,
//             id
//         }),
//         'start'
//     )
// }

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

// using
// console.log(isNotEmpty, isNumber, maxLength);

let formGroupConfig = {
    "first-name": [isNotEmpty, maxLength(16)],
    "last-name": [isNotEmpty, maxLength(20)],
    "age": [isNotEmpty, isNumber]
};


// Validator.errors


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
        
    }
}