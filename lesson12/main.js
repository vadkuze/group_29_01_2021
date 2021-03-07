// let m = new Map([[1,2], [{}, true]]);
// let info = {info: 'Info about user'};
// m.set(1, true);
// m.set(info, { name: 'John'});
// m.set([1,2,3], false);
// m.has(info)
// info = null;
// console.log(m);
// console.log(m.size);

// let set = new Set([1,3,5,6]);
// set.add(1);
// set.add(1);
// set.add(1);
// set.add(2);
// set.add(info);
// set.add(info);

// console.log(set);

// let sym1 = Symbol('id');
// let sym2 = Symbol('id');
// console.log(sym1 === sym2);

// let id = Symbol('id');

// let user = {
//     [id]: 10
// }

// user[id] = 20;

// console.log(user[id]);

// let id1 = Symbol.for('id');
// let id2 = Symbol.for('id');

// console.log(id1 == id2);


// DOM 

// console.log(document.body.firstElementChild.nextElementSibling.previousElementSibling);
// console.log(document.body.children);

console.dir(
    document.getElementById('p'),
);

let collection = document.getElementsByClassName('paragraph');
console.log(collection);

let span = document.querySelector('.span');
let ps = document.querySelectorAll('.paragraph');

let chapter = document.querySelector('.chapter'); // LI

  console.dir(chapter.closest('.book')); // UL
  console.dir(chapter.closest('.contents')); // DIV


  let element = document.body;

  while(element.firstElementChild) {
      element = element.firstElementChild;
      console.log(element);
  }