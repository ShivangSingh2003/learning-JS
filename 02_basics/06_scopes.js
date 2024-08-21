// { {} -> are the block scope. Outside {} is Global Scope 

// }

let a = 5
const b = 6
var c = 7

if(true) {
    let a = 8
    const b = 9
    var c = 10
}

// console.log(a);
// console.log(b);
// console.log(c); //var doesnt follow block scope

function one() {
    const username = "shivang"
    
    function two() {
        const website = "youtube"
        //console.log(username);
        
    }
    // console.log(website);
    two()
    
}
one()

if(true) {
    const username = "rohit"
    if(username === "rohit") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);

// +++++++++++++++++++++++++++++++++++++Interesting Concept++++++++++++++++++++++++++++++++++++++++++

//Function

console.log(addOne(5)) //Can be accessed before initialization
function addOne(num){
    return num+1
}

// addOne(5)

//Expression

console.log(addTwo(5)); //Cannot be accessed before initialization because function value stored in a variable -> Hoisting

const addTwo = function(num){
    return num + 2
}

// addTwo(5)