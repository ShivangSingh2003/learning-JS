const user = {
    username: "raman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "rohit"
// user.welcomeMessage()

// console.log(this); //gives an empty object {} as output when using node. Gives window as output when using browser

// function test() {
//     let username = "chetan"
//     console.log(this.username); //output is undefined 
// }

// test()

// const test = function(){
//     let username = "chetan"
//     console.log(this.username); //output is undefined 
// }
// test()

// arrow function
const test = () => {
    let username = "chetan"
    console.log(this.username); //output is undefined 
    console.log(this) // output is empty object {}
}

// test()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "Kunal"}) //object should also be wrapped in parenthesis

// console.log(addTwo(3,4))

// const myArray = [2,5,7,8]

// myArray.forEach(function() {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())