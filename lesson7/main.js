// 'use strict';

// // let cat = {
// //     name: "Bob",
// //     age: 10,
// //     run: function() {
// //        console.log(this.name + ' is running'); 
// //     },
// //     eat(food) {
// //        console.log(this.name + ' is eating ' + food); 
// //     },
// // }

// // let cat2 = {
// //     name: 'Peach'
// // };

// // // cat2.r = cat.run;
// // // cat2.r();

// // let catFn = cat.run;

// // catFn();

// // // console.log(this);
// // console.log(cat.name, cat);
// // console.log(cat2.name, cat2);

// // function walk(){
// //     console.log(this.name + ' is walking'); 
// // }

// // cat.walk = walk;
// // // cat2.walk = walk;
// // // cat2.walk();

// // cat.walk();
// // console.log('walk.call');
// // walk.call(cat2);
// // cat.eat.call(cat2, 'fish');

// // // function showAll(...args){
// // //     console.log(args.join(' - '));
// // // }
// function showAll(){
//     console.log(arguments);
//     // console.log([].join.call(arguments, ' - '));
//     let args = [].slice.call(arguments);
//     args.push('new value');
//     console.log(args.join(' - '));
// }

// // showAll(1, 'test-2', false, 10);


// // let strangeObject = {
// //     0: 10,
// //     1: 30, 
// //     2: 100,
// //     length: 3
// // };

// // let values = [].slice.call(strangeObject);
// // console.log(values);

// // console.log(Math.max(...values));

// // console.log(Math.max.apply(null, values));


// // let bindedFn = cat.eat.bind({name: 'Frank'}, 'milk');
// // //

// let user = {
//     name: 'David',
//     sayHi() {
//         console.log(`Hi ${this.name}`);
//     },
//     goWork() {
//         console.log(`${this.name} is gonna work`);
//     }
// }

// for (const key in user) {
//     const element = user[key];
//     if( typeof user[key] === 'function') {
//         user[key] = user[key].bind(user);
//     }
// }

// let user2 = {
//     name: 'Joe',
// }

// // let sayHi = user.sayHi.bind(user2);
// setTimeout(user.goWork, 1000 );

// // setTimeout( function() {
// //     user.sayHi();
// // } , 1000 );

// let group = {
//     title: "GROUP-29.01.21",
//     students: ['Maks', 'Kirill', 'Sergey'],

//     showStudent(index) {
//         this.students.forEach(()=>{
//             console.log(this.students);
//             console.log( `${this.title}: ${this.students[index]}`)
//         })
//     }
// }

// group.showStudent(1);