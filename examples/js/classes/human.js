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