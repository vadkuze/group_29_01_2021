// function isNumber(v) {
//     return !isNaN(parseFloat(v)) && isFinite(v)
// }

// console.log(isNumber(Infinity));

// if(a == null) {
//     console.log('Вы отменили');
// } else if(isNumber(a)) {
//     console.log('Введите число');
// } else {
 
// }
// let counter = 5;
// while(--counter) {
//     console.log('loop', counter);
// }
// let counter2 = 5;

// while(counter2--) {
//     console.log('loop-2', counter2);
// }

// let counter3 = 0;
// while(counter3 < 5) {
//     counter3++
//     console.log('loop-3', counter3);
// }

// let i = 5;

// do {
//     console.log('loop-4', i);
// } while (false)

// for (let index = 2; index < 10; index+=2) {
//     console.log(index);
// }

// console.log(index);



// do {
//     let num = +prompt('Enter the number');

//     if(num >= 10) {
//         console.log('break');
//         break;
//     }

//     if(num % 2 == 0) {
//         continue;
//     }

//     console.log(num);

// }while(true);
// let sum = 0,
//     counter = 10,
//     num;

// do {
//     num = prompt('Enter the number');
    
//     if(num == null) {
//         break;
//     }

//     num = Number(num);
//     if(num % num == 0 && num % 5 == 0 ) {
//         sum-= num
//     } else {
//         sum += num;
//     }
    
// } while(!isNaN(num));

// console.log(sum);
// let row = 10;
// let cell = 10;
// document.write('<table>')

// out: for (let i = 0; i < row; i++) {
//     document.write('<tr>')
    
//     for (let j = 0; j < cell; j++) {
//         document.write(`<td>${ (i == j) ? 1 : 0 }</td>`)
        
//         // if( (i + j) == 5) {
//         //     break out;
//         // }
//     }
    
//     document.write('</tr>')
// }

// document.write('</table>')

// let name = prompt('Your name');

// while(NaN) 

// console.log(showFullName('John', 'White'));

// function showFullName(name, surname) {
//     let test = 'test';
//     return `Fullname: ${name} ${surname} - ${test}`;
// }

// let sum = function (a, b) {
//     return a + b;
// }
