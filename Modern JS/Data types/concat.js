// let arr = ["t", "e", "s", "t"];

// alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

// alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id === 1);

console.log(user)

function compare(a, b) {
if(a > b) return 1;
if (a === b) return 0;
if (a < b) return -1;


}

let arr = [1,2,15];

arr.sort(compare);
console.log(arr);
