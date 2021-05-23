// let a = 10, b = 20; поменять значения местами 

// к примитиву нп {} + {}
// Сборщик мусора https://learn.javascript.ru/garbage-collection


// const makeCounter = initial => (increaseValue) => initial += increaseValue;

// let counter = makeCounter(1);
// (counter(1));
// (counter(3));
// (counter(3));
// (counter(3));
// console.log(counter(3));


function test() {
    var a = 10;

    if(true) {
        var a = 20
    }

    console.log(a);

}

test();


for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(this.valueOf());
    }.bind(i))
}
