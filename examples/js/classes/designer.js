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