//Object literal

const user = {
    username: "Shiv",
    loginCount: 8,
    isSignedIn: true,

    getUserDetails: function(){
        // console.log("Got user details fromDatabase");
        // console.log(`Username is : ${this.username}`);
        // console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor Function

// const promiseOne = new Promise()
// const myDate = new Date()

// new -> constructor function, allows us to make multiple instances with the same object literal

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}

const userOne = new User("Ravi", 10, false)
const userTwo = new User("Himesh", 11, true) //overrides the values of userOne
console.log(userOne);
console.log(userTwo);


