
function Human({firstName, lastName}) {
    this.firstName = firstName;
    this.lastName = lastName;

    let credentials = {
        password: 'pass',
        login: 'qwerty',
    }

    this.setCreds = function (value, confirmPassword) {
        if(confirmPassword === 'admin') {
            credentials = value;
        } else {
            console.error('Incorrect password')
        }
    }

    this.getCreds = function (confirmPassword) {
        if(confirmPassword === 'admin') {
            return Object.assign(credentials);
        } else {
            console.error('Incorrect password')
        }
    }
}

function Developer({position,  ...info}) {
    Human.call(this, info);
    this.position = position;
    this.coder = true;
}

function Designer(info) {
    Human.call(this, {
        firstName: info.firstName,
        lastName: info.lastName,
    });
    this.project = info.project;
}

Human.prototype.sayHello = function() {
    console.log('Hello from ' + this.firstName);
}
// Developer.prototype = {
//     ...Human.prototype, 
//     constructor: Developer,
//     code() {
//     console.log('He is coding ' + thing);
        
//     }
// }

Developer.prototype = Object.create(Human.prototype)
Developer.prototype.constructor = Developer;

Developer.prototype.code = function(thing) {
    console.log(`${this.firstName} is coding ${thing}`);
}
// console.dir(Developer.prototype);

//  let {firstName, testName} =  test;
// console.log(firstName, testName);

Designer.prototype = Object.create(Human.prototype);
Designer.prototype.constructor = Designer;

Designer.prototype.design = function(thing) {
    console.log(`${this.firstName} is designing ${thing}`);
}
// polymorphism
Designer.prototype.sayHello = function() {
    Human.prototype.sayHello.call(this);
    console.log("and I'm designer");
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

console.log(human);
console.log(dev);
console.log(des);

dev.sayHello();
dev.code('the store');

des.sayHello();
des.design('lp');
human.setCreds({ password: '12345', login: 'user-human'}, 'admin')
console.log(human.getCreds('admin'));