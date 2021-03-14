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

btnAddStart.onclick = function () {
    let id = ++Human.count;
    
    humanList.add(
        new Human({
            firstName: `name: ${id}`,
            lastName: `surname: ${id}`,
            id
        }),
        'start'
    )
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
