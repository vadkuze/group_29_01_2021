// let count = 10; 

// function getValue(){
//     return 3;
// }

// function renderMessage(message, count = getValue()) {
//     if(typeof message != 'string') {
//         document.write(`empty <br>`);
//         return;
//     }
    
//     for (let index = 0; index < count; index++) {
//         document.write(`${message} <br>`);
//     }
// }

// renderMessage('Hello', 5);


// function outer() {
//     inner();

//     function inner() {
//         console.log('inner');
//     }
// }
// outer()


// function sum(a, b) {
//     // a +=1;
//     // b = c 
//     return a + b;
// }

// function getTypeInfo() {
//     return 'info about your job'
// }

// let password = prompt('Password ?');
// let countLogIn = prompt('countLigIn ?');

// let edit = false, view = true;

// if(password == 'admin') {
//     edit = true;
// }

// let user = {
//     name: 'John',
//     age: 18,
//     job: {
//        position: 'web developer'
//     },
//     edit,
//     view,
//     [countLogIn]: 'log in',
//     [getTypeInfo()]: true,
// };

// console.log(user.age);
// user.age = 19;
// console.log(user.age);
// user.lastName = 'Black';
// user['lastName'] = 'Black';
// console.log(user.job?.city);
// delete user.lastName
// console.log(user);

// let cat = {
//     name: "Bob",
//     age: 10,
//     run: function() {
//        console.log(cat.name + ' is running'); 
//     },
//     eat(food) {
//        console.log(cat.name + ' is eating ' + food); 
//     }

// }
// cat.run();
// cat.eat('meat');

// console.log(cat);

// bad practice

    // let cat2 = cat;

    // cat2.run = null;
    // console.log(cat, cat2);

// copy with for
    // let cat2 = {}
    // for (const key in cat) {
    //     //    console.log(cat[key]);
    //     cat2[key] = cat[key];
    // }
    // cat.run = null;
    // console.log(cat, cat2);

//copy with assign 
// let cat2 = Object.assign({}, cat, { breed: 'simple'});
// cat.run = null
// console.log(cat2);

// let user = {
//     name: 'John',
//     age: 18,
//     job: {
//        position: 'web developer'
//     },
// }
// let user2 = user;
// console.log(user2 === user);

// let user2 = Object.assign({}, user);
// console.log(user2.job === user.job);


// function isEmpty(o) {
//     for (const key in o) {
//         return false;
//     }
//     return true;
// }
// for (const key in o) {
//     if(typeof key == 'number') {
//         o[key] *= 10
//     }
// }


// function checkOnObjectType(obj, checkKey) {
//     if(!!obj[checkKey]) return true;
//     else return false
// }

// console.log(checkOnObjectType(user, 'job'));


main();

function main() {

    let order = [], newOrder;
    let size = +prompt('size: 1, 2, 3');
    let typePizza = +prompt('Pepperoni: 0, With chicken: 1, Salmon: 2');
    let types = ['pepperoni', 'chicken', 'salmon']


    acceptOrder()
    newOrder = getPizza(size, types[typePizza]);
    order.push(newOrder);
    prepareOrder();
    done();
    console.log(order);

}

function acceptOrder() {
    setTimeout(()=>{
        console.log('You order has accepted');
    }, 1000)
}

function prepareOrder() {
    setTimeout(()=>{
        console.log('You order is preparing ');
    }, 2000)
}

function done() {
    setTimeout(()=>{
        console.log('You order is done ');
    }, 5000)
}

function getPizza(size, type) {
    return {
        orderType: 'pizza',
        [size == 1 ? 'small' : size == 2 ? 'middle' : 'big']: true,
        type: type
    };
}

// getPizza(size, types[typePizza])
