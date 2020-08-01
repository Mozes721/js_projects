// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log(sorted);

// function sortByAge(arr) {
//     arr.sort((a, b) => a > b ? 1 : -1);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// console.log(arr[1].name);



function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

let arr = [1,2,3];

shuffle(arr);

console.log(arr);

let str = "Hello";

let iterators = str[Symbol.iterator]();

while (true) {
    let result = iterators.next();
    if (result.done) break; 
    console.log(result.value);
}
