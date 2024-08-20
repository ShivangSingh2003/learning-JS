function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("G");
    
}

// sayMyName -> reference of the function
// sayMyName() -> function execution
//sayMyName()

// function addTwoNumbers(number1, number2) { //parameters
//     console.log(number1 + number2);
    
// }
// addTwoNumbers(9, 5) //arguments
// const result = addTwoNumbers(3,5)
// console.log(result);

function addTwoNumbers(number1, number2) { //parameters
    let result = number1 + number2
    return result
    
}
const result = addTwoNumbers(3,5)
// console.log(result);

function loginUserMessage(username = "User") { //default value....used when no value passed
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

//loginUserMessage("Raman") //doesn't print anything
// console.log(loginUserMessage("Raman"));

// console.log(loginUserMessage()); //undefined passed  and printed

function calculateCartPrice(...price1) { //Rest operator (also know as spread operator, depends on usecase)
    console.log(price1);
    
}

// function calculateCartPrice(val1, val2, ...price1) {
//     return price1 //first two input values stored in var1 and var1... remaining values in the price1 array
// }

// console.log(calculateCartPrice(200, 500, 1200));

const user = {
    name: "Chirag",
    price: 250
}

function handleObject(anyObject) {
    console.log(`User's name is ${anyObject["name"]} and the price is ${anyObject["price"]}`);
}
//handleObject(user)

handleObject({
    name: "Gokul",
    price: 399
})

const arr = [400, 50, 345]

function returnSecondValue(array) {
    return array[1]
}
console.log(returnSecondValue(arr));
