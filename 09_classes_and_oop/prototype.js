// let myName = "Shivang     "
// console.log(myName.length);
// console.log(myName.trueLength); -> myName.trim().length
//Objective: Create a method that gives true length of string after trimming white space

let myHero = ["thor", "ironman"]

const heroPower = {
    thor: "hammer",
    ironman: "suit",

    getThorPower: function(){
        console.log(`Thor's power is ${this.thor}`);
        
    }
}

Object.prototype.shiv = function(){
    console.log(`Shiv is available in all objects`);
    
}

Array.prototype.heyShiv = function(){
    console.log(`Hey shiv`);
    
}
// heroPower.shiv()
// myHero.shiv()
// myHero.heyShiv()
// heroPower.heyShiv()

const user = {
    username: "guru",
    email: "guru@ai.com"
}
const teacher = {
    makeVideo: true
}

const teachingAssistant = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: true,
    isFullTime: true,

    __proto__: teachingAssistant //prototypal inheritance... inheriting the properties of another object
}

teacher.__proto__ = user

//Modern Syntax

Object.setPrototypeOf(teachingAssistant, teacher)

let username = "Hello world!     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
    
}

username.trueLength()
"tea".trueLength()
"americano   ".trueLength()