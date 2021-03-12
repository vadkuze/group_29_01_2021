

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