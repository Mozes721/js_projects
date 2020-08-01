let a = 1
let b = 2

console.log(a + b)

let i = 0

// let userName = 'Richard';

// function showMessage() {
//     let message = 'Hello, ' + userName;
//     console.log(message);
// }

// function pow(x, n) {
//     let result = x;

//     for(let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// n = 3;
// x = 3
// if (n < 1) {
//     console.log('Did parents allow you?');
// }else {
//     console.log(pow(x,n))
// }
// pow(x,n)


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no;

// }
// function showOk() {
//     console.log('Agreed')
// }
// function showCancel() {
//     console.log('Disagreed')
// }

// ask('Do You agree?', showOk, showCancel);

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// };
// console.log(sum(1,2));

// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// pow(3,3)

describe("pow", function() {

    describe("raises x to power 3", function() {
  
      function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`, function() {
          assert.equal(pow(x, 3), expected);
        });
      }
  
      for (let x = 1; x <= 5; x++) {
        makeTest(x);
      }
  
    });
  
    // ... more tests to follow here, both describe and it can be added
  });


