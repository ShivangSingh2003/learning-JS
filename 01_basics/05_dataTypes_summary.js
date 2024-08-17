/* 
Primitive Data Types
-> Call by value
7 Types :  String, Number, Boolean, Null, Undefined, Symbol, BigInt

**JS is dynamically typed language, hence we don't need to define datatypes while writing code

Reference/Non-Primitive Data Types
->Call by reference
Arrays, Objects, Functions 
*/

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(anotherId);

//array
const strArr = ["humans", "dogs", "cats"]

//object

let myObj = {
    name: "hitesh",
    age: "35",
}

const myFunction = function(){
    console.log("Hello World!!");
}

/*+++++++++++++++++++++++++++++++++++++++++++TYPES OF MEMORIES++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Stack -> Primitive Data Types
Heap -> Reference Data Types
*/

let name1 = "arvind"
let anotherName = name1
anotherName = "satvik"

console.log(name1)

console.log(anotherName)

let userOne = {
    email: "user1@gmail.com",
    upi: "upi@okhdfcbank"
}

let userTwo = userOne

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
