const accountId = 2215
let accountEmail = "shivang@yahoo.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 5 not allowed
accountEmail = "sh@gmail.com"
accountPassword = "21343"
accountCity = "Kanpur"

let accountState; // value is undefined
/* 
Prefer not to use var 
beacuse of issue in block 
scope and functional scope 
*/ 

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])