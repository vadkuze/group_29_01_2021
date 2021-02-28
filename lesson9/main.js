// let o = new Object();

// function createUser(name, age) {
//     return {
//         name,
//         age,
//         work() {
//             console.log(this.name + ' is working');
//         }
//     }
// }

// let david = createUser('david', 30);
// let frank = createUser('frank', 25);

// console.log(david);
// console.log(frank);
// console.dir(User);
function User(name, age) {
    // this = {};
    // this.__proto__ = User.prototype;
    this.name = name;
    this.age = age;
    // return this;
}

 // static method
User.createOriginUser = function() {
    return new User('', null);
}

User.location = 'ru';

User.prototype.work = function() {
    console.log(this.name + ' is working');
}

User.prototype.department = 'IT Kharkov';

console.dir(User)

let david = new User('david', 30);
let frank = new david.constructor('frank', 25);
let emptyUser = User.createOriginUser()
david.work();
frank.work();

console.log(david.department);
console.log(frank.department);
console.log(emptyUser);

// if(frank instanceof Object) {
//     console.log(true);
// }
// console.log(david);
// console.log(frank);



// let animal = {
//     food: 'meat',
//     eat() {
//         console.log('animal is eating ' +  this.food );
//     }
// }


// console.log([].__proto__.__proto__.__proto__);
// console.dir(function(){}.__proto__);

// function Box(h, w, material) {
//     this.height = h;
//     this.weight = w;
//     this.material = material;
//     this.isExpanded = false;
// }

// Box.prototype.expand = function() {
//     console.log('expanded box with ' + this.material);
//     this.isExpanded = true
// }

// Box.prototype.changeBoxAsSquare = function(value) {
//     if(this.isExpanded) {
//         this.height = this.weight = value;
//     } else {
//         throw Error("Box isn't expanded");
//     }
// }

// let box = new Box(100, 200, 'wood');
// let box2 = new Box(10, 40, 'plastic');

// console.log(box);
// console.log(box2);
// // открыть коробку
// box.expand();

// box.changeBoxAsSquare(100);
// console.log(box);

// box2.changeBoxAsSquare(100);
// console.log(box.isExpanded);
// console.log(box2.isExpanded);
