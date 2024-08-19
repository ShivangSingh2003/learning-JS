// an object can be made by two ways -> using constructor (singleton) and as literal


//singleton
// Object.create()


//object literals

const mySym = Symbol("myKey")
const user = {
    name: "Shivang", //can be accessed using . operator
    "full name": "Shivang Singh", // cannot be accessed using . operator beacuse the key is declared as a string
    age: 34,
    [mySym]: "myNewKey",
    location: "Delhi",
    email: "abc@rediffmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

user.email = "abc@yahoo.com"
//Object.freeze(user)
user.email = "pqr@gmail.com"
//console.log(user);

user.greeting = function(){

    //console.log(`Welcome ${user["full name"]}`);
    console.log(`Welcome ${this.name}`);
    
}

console.log(user.greeting());
//console.log(user.greeting); //gives function return back    
