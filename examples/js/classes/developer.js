export default class Developer extends Human {
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