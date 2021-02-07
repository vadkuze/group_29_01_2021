// let a = 'hello';
// a.indexOf('ll');

// console.log(a.includes('llo'));
let s = '';

let arr = [1, 'hello', true];
arr.length = 2;
arr.length = 20
console.log(arr[2], arr.length);

let arr2 = [10];
arr2[1] = false;
arr2[5] = null;
arr2[6] = 50;
arr2[6] = 3;
console.log(arr2[1]);
console.log('Last item: ', arr2[arr2.length - 1]);

let arr3 = new Array(10);
console.log(arr3.length);

arr3[0] = 'test'
arr3[5] = 10

// all array
console.log(arr, arr2, arr3);

let array = [1,4,-1,70, -50,0,5];

let min = array[0];
let sum = 0;
let ourLength = 0;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element + ' - ' + index);

    if(min > element) {
        min = element;
    }

    if(element > 0) {
        sum += element;
        ourLength++;
    }

}

console.log(sum / ourLength);
console.log(min);

// array's methods 
let fruits = ['Apple', 'Orange'];

// adding

let lengthFromPush = fruits.push('Pineapple');
let lengthFromUnshift = fruits.unshift('Melon');

console.log(lengthFromPush, lengthFromUnshift, fruits);

// removing

let lastElementFromPop = fruits.pop();
let lastElementFromShift = fruits.shift();

console.log(lastElementFromPop, lastElementFromShift, fruits );

fruits = fruits.concat('Watermelon', ['Cherry', 'Banana'])
fruits2 = ['Cherry', 'Banana'].concat(fruits);

console.log(fruits, fruits2);

fruits.push('Melon');
console.log(fruits);

// other arrays

fruits.reverse();
console.log(fruits);

let arrNumbers = [0, 1].concat(2,3,4, [5,6], [7])
                       .reverse();


console.log(arrNumbers);

// copy
// anti pattern
let a = [10, 20];
let b = a;
let c = b;


a.push(30);
b.push(-10);

console.log("a", a);
console.log("b", b);
console.log("c", c);

// copy with slice

let numbers = [10, 50, 70, 6, 3];
let numbers2 = numbers.slice(1, -1);
let copyNumbers = numbers.slice();
console.log('numbers', numbers);
console.log('numbers2', numbers2);

numbers.push(90)
console.log('numbers', numbers);

console.log('copyNumbers', copyNumbers);

// splice
let strings = ['Hello', "I'", 'm', 'here'];

let deleted = strings.splice(1, 2, "I'm");
console.log('deleted', deleted);

// only insert
strings.splice(2,0, 'smth')
console.log(strings);


let stringsArray = ['Hello', "I'", 'm', 'here'];

let str = stringsArray.join('').split('')

console.log(str);

function filterNegativeValue(array) {
    let newArr = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if(element) {
            newArr.push(element)
        }
    }

    return newArr;
}

let test = [10, 0, false, '', 60, null, NaN]
console.log(filterNegativeValue(test));