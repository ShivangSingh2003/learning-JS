//truthy and falsy values

const userEmail = "abhi@hotmail.com" //considered true value. "" -> empty string considered false
// const userEmail = [] -> considered true
if(userEmail) {
    console.log("Got User Email");
    
}else {
    console.log("Don't have user email");
    
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", [], "false", " ", {}, function(){}

const arr = []

if(arr.length === 0){
    console.log("Array is empty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}


// All computed as true
// false == 0
// false == ""
// 0 == ""