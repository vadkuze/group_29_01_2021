class Human {
    static count = 0;

    constructor({firstName, lastName, id}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

    static getEmptyHuman() {
        return new Human(null, null);
    }

    sayHello(){
        console.log('Hello from ' + this.firstName);
    }
}

class Developer extends Human {
    #coder = true;

    constructor({position,  ...info}) {
        super(info)
    }

    code(thing) {
        console.log(`${this.firstName} is coding ${thing}`);
    }

    get coder() {
        return this.#coder;
    }

    set coder(value) {
        this.#coder = value;
    }
}

class Designer extends Human {

    constructor({project,  ...info}) {
        super(info);
        this.project = project;
    }

    design(thing) {
        console.log(`${this.firstName} is designing ${thing}`);
    }

    sayHello(){
        super.sayHello();
        console.log("and I'm designer");
    }
}

class StoreService {
    constructor(initialValue = []) {
        this.store = initialValue;
    }

    addToStore(item){
        this.store.push(item);
    }

    removeItem(id) {
        this.store = this.store.filter( item => item.id != id);
    }
}
// let store = new StoreService();

// class Table extends StoreService{}
class ListItem extends StoreService{
    constructor(container, initialValue) {
        super(initialValue);

        this.HTMLContainer = container;
    }

    add(human, place) {
        const {firstName, lastName, id} = human;

        let listItem = this.createItem(firstName, lastName, id);
       
        switch(place) {
            case 'start': {
                this.HTMLContainer.prepend(listItem);
            }break;
            default: {
                this.HTMLContainer.append(listItem);
            }
        }

        this.addToStore(human)
    }

    removeById(id) { 
        let child = this.HTMLContainer.querySelector(`[data-id ="${id}"]`)
        this.HTMLContainer.removeChild(child);
        this.removeItem()
    }

    createItem(name, lastName, id) {
        const div = document.createElement('div');
        div.classList.add('list-item');
        div.dataset.id = id;
        div.textContent = `${name} ${lastName}`
        return div;
    }

}

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

const Validator = {
    errors: {},
    validators: {
        isNotEmpty: {
            validate(value) {       
                return value !== "";
            },
            message: "This field should not be blank",
            errorType: 'required'
        },

        isNumber: {
            validate(value) {       
                return !isNaN(value);
            },
            message: "This field should be a number",
            errorType: 'number'
        }
    },
    validate(config, form) {
        if(!(form instanceof HTMLFormElement)) {
            throw {
                name: 'ValidationError',
                message: 'You should pass HTML Form'
            }
        }
        this.errors = {};

        let elements = form.elements;

        for( const [inputName, validators] of Object.entries(config)) {
         

            if(!validators?.length) {
                throw {
                    name: 'ValidationError',
                    message: `No handler to validate ${inputName}`
                }
            }

            if(!elements[inputName]) {
                throw {
                    name: 'ValidationError',
                    message: `${inputName} does not exist in the ${form.name}`
                } 
            }
            
            let value = elements[inputName].value;
         

            validators.forEach(({validate, message, errorType}) => {
                
                if(!validate(value)) {
                    this.errors[inputName] = {...this.errors[inputName], [errorType]: message};
                }
            })
        }

        return this.hasErrors();
    },

    hasErrors() {
        return !Object.keys(this.errors).length != 0;
    }
}

Validator.validators.maxLength = function(length) {
    return {
        validate(value) {       
            return value.length <= length;
        },
        message: `This field should not be more then ${length}`,
        errorType: 'maxLength'
    }
}

// using
const {isNotEmpty, isNumber, maxLength} = Validator.validators;

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