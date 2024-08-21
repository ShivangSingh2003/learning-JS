//if statement

// if (2 == "2") { //true
//     console.log("Executed First!");
    
// }
// if (2 === "2") { //false because strict equal checks data type as well. !== -ve version
//     console.log("Executed Second!");
    
// }

const temperature = 41

if (temperature>50) {
    console.log("Temperature is greater than 50");
    
} else {
    console.log("Temperature is less than 50");
}

//implicit scope, scope is of one line and ends with semi-colon

// const balance = 1000
// if(balance>500) console.log("Sufficient balance");

// if(balance < 500){
//     console.log("Less than 500");
    
// } else if(balance<750){
//     console.log("less than 750");
    
// }else if(balance<900){
//     console.log("less than 900");
    
// }else{
//     console.log("less than 1200");
    
// }


//Logical operators -> &&, ||, !

// Nullish Coalescing Operator (??) : null undefined
//if both operands have a value, the first value is assigned. if one value is null and other is valid, the valid value is assigned
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15 //first valid value assigned ->10   
console.log(val1);

// Ternary Operator

// condition ? true : false 

const price = 100

price>=80 ? console.log("Price more than 80") : console.log("less than 80");
