class Human {
    static countOfPeople = 10;

    constructor({firstName, lastName}) {
        this.firstName = firstName;
        this.lastName = lastName;
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


let human = new Human({
    firstName: 'Elis', 
    lastName: 'Fish'
});

let dev = new Developer({
    firstName: 'John', 
    lastName: 'Black', 
    position: 'Middle',
});

let des = new Designer({
    firstName: 'Steve', 
    lastName: 'Pit', 
    project: 'Google AI',
});


class PowerArray extends Array {

    isEmpty(){
        return !this.length > 0;
    }

    compare(array) {
        if(!Array.isArray(array)) throw new Error("It isn't array!")

        return this.every( item, index => item === array[index]);
    }

}