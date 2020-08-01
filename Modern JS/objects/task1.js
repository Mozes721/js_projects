let user = new Object();


let users = {
    name: 'John',
    surname: 'Smith',

};

let admin = user;

users.name = 'Pete';

delete users.name;

// console.log(users.name);

// Object.assign {user, {name: 'Peter'}};

// console.log(users.name);

// let arr = ["Apple", "Orange", "Pear"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let fruit of arr) {
//     console.log(fruit);
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
// console.log( matrix[1][1] );

// let music = ['Jazz', 'Blues'];
// music.push('Rock-n-Roll')
// music[Math.floor((music.length - 1) / 2)] = "Classic";
// console.log(music)
// music.unshift("Rap", "Reggae");
// console.log(music);

// Sum input numbers 

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = input("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  


console.log(sumInput());