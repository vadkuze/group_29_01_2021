// let phrase = "Hello";
// say('Elena')

// function say(name) {
//     console.log(`${phrase}, ${name}`);
// }

// phrase = "Bye";
// say('John')


// function showInfo(name, surname) {

//     console.log(getFullName());

//     function getFullName() {
//         return `${name} ${surname}`
//     }
// }

// showInfo('Joe', 'White')


// function makeCounter(initialCount) {
//     // let initialCount;
//     return function() {
//         return initialCount++;
//     }
// }

// let counter1 = makeCounter(0);
// let counter2 = makeCounter(10);

// console.log('counter1' , counter1() );
// console.log('counter1' , counter1() );
// console.log('counter1' , counter1() );
// console.log('counter2' , counter2() );
// console.log('counter2' , counter2() );
// console.log('counter2' , counter2() );

// let counter3 = counter1;
// console.log('counter3' , counter3() );
// console.log('counter3' , counter3() );
// console.log('counter3' , counter3() );
// console.log('counter1' , counter1() );

// console.dir(counter1);


// if(true) {
//     let name = 'ifName';

//     function printName() {
//         console.log(name);
//     }
// }

// let i = 0;
// while(i < 10) {

//     i++;
// }


// {
//     let name;
// }


// (function(){
//     let name = 'test';
//     alert(name)
// })()

// function convertTo(n) {

//     return function(type) {
//         return `${n}${type}`
//     }
// }

// let resultInCm = convertTo(10)('cm');
// let resultInPx = convertTo(100)('px');

// console.log(resultInCm);
// console.log(resultInPx);

// let r = (n) => (type) => `${n}${type}`;

// let resultInMm = r(4)('mm');
// console.log(resultInMm);


// let arr = [1,2,3,4,5,6]

// let res = arr.filter(inArray([22,3,40])) // 3
// console.log(res);

// function inArray(values) {
//     return function(item) {
//         return values.includes(item)
//     }
// }

