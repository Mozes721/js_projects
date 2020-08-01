let users = new Object();// "object constructor" syntax



let user = {
    name: "Bob",
    age: 30,
    "likes birds": false
};
delete user["likes birds"]
console.log(user.name);


function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
},{
    name: "Ann"
});



let user1 = {
    admin() {
        console.log("I am an admin");
    }
    
}

// function readNumber() {
//     let num;

//     do {
//         num = prompt("Enter a number", 0); 

//         }while (!isFinite(num)); 
//         if (num ==null || num == "") return null;

//         return + num;
//     }


// console.log(`Read: ${readNumber()}`);


function randomNumber() {
    var random= Math.floor(Math.random() * 25 +1);

    console.log(random);
}
randomNumber()