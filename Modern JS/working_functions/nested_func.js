// function makeCounter () {
//     let count = 0;


//     return function() {
//         return count++;
//     }
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());

// function f() {
//     let value = 123;
// }

function Counter() {
    let counter = 0;

    this.up = function() {
        return counter++;
    };
    this.down = function () {
        return counter--;
    };
}

function inBetween(a, b) { 
    return function(x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inArray([3,5])));


// function makeArmy() {
//     let shooters = [];

//     let i = 0;

//     while (i < 10) {
//         let shooter = function() {
//             console.log(i);
//         };
//         shooters.push(shooter);
//         i++;
//     }
//     return shooters;
// }

// let army = makeArmy();

// army[0]();
// army[1]();

// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...more) {}

// alert(f1.length); // 1
// alert(f2.length); // 2
// alert(many.length); // 2


// function sayHi() {
//     console.log("Hi");

//     sayHi.counter++;
// }
// sayHi.counter = 0;

// sayHi();
// sayHi();

// console.log(`Called ${sayHi.counter} times`);


function makeCounter() {

    function counter(){
        return counter.count++;

    };

    counter.set = value => count = value;
    counter.decrease = () => count--;
    counter.count = 0;

    return counter;
}
let counting = makeCounter();

console.log(counting.set(5));
console.log(counting.decrease());
console.log(counting.decrease());

// let sayHi = function (who) {
//     if (who) {
//     console.log(`Hello , ${who}`);
//     }
//     else{
//         ("guest")
//     }
// }

// sayHi();

function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };
    return f;
}

