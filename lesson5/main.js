// let arr = [0];

// arr = arr.concat([1,2,3].splice(0,3))
// console.log(arr);

// console.log(Math.max(...[10,2,3,4]));

// callback

// let sum = function (a,b) {
//     return a + b;
// }

// function multiply (a,b) {
//     return a * b;
// }

// function calculate (actionCallBack, x, y) {
//     // ...
//     return actionCallBack(x, y);
// }

// console.log(calculate(sum, 10, 30));
// console.log(calculate(multiply, 10, 30));

let arr = [0, 1, 2, 3, 4, 5]

// let multiplyTwice = function (value, index, arr ) {
//     arr[index] *= 2
// }

// arr.forEach(multiplyTwice)

// arr.forEach(function (value, index, arr) {
//         arr[index] *= 2;
// })

// forEachFn(arr, function (value, index, arr) {
//     arr[index] -= 2;
// })

// console.log(arr);

// function forEachFn(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//         callback(array[index], index, array)
//     }
// }


// let numbers = [-2, 3, 'str', null, 10, 50, -9, -43];

// let filteredArray = numbers.filter(function (value) {
//     return typeof value === 'number' && value > 0;
//  })

// let filteredArray = filterFn(numbers, function (value) {
//     return typeof value === 'number' && value < 0;
// })

// console.log(filteredArray);

// function filterFn(array, callback) {
//     let arr = [];
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (callback(element, index, array)) {
//             arr.push(element.length)
//         }
//     }

//     return arr;
// }

let strings = ['Hello', 'I', "'m", 'string'];

let strsLengthTwice =  strings.map(function (value) {
                                return value.length;
                            }).map(function (value) {
                                return value * 2;
                            }).filter(function (value) {
                                return value >= 10;
                            });

console.log(strsLengthTwice);

// arrow function

// let pow = x => x**2;
const arrowSumFn = (a,b) => {
    console.log(a,b);
    return a + b;
}

console.log(arrowSumFn(1,3));


let longStrings = strings.filter( value => value.length >= 5);
let longString = strings.find( value => value.length >= 5) || '';
console.log(longString);
console.log(longStrings);

// let numbers = [10,5,1,6,7,-11];
let numbers = [1111, 2, 11, 12, 122, 5, 7 ];

let sortedArray = numbers.sort( (a, b) =>  a - b )
console.log(numbers);

let sumOfElementArray = numbers.filter( v => v % 2 == 0)
                               .reduce( (accumulate, current, index, array) =>  accumulate + current)

                               console.log(sumOfElementArray);

// console.log(Array.isArray([]))

for (const value of 'Hello' ) {
    console.log(value);
}

console.log('first element - ', 'Hello'[0]);