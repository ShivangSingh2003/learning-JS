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

console.log(a);
console.log(b);
console.log(c); //var doesnt follow block scope
