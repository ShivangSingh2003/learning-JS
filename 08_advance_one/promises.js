const promiseOne = new  Promise(function(resolve, reject){
    //Do an async task
    //DB calls, network calls, cryptography, etc...

    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 2000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2 is complete");
        resolve()
    }, 2000)
}).then(function(){
    console.log("Async Task 2 is resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"chailover@chai.com"})
    }, 2000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"coffee", password:"coffee123"})
        } else{
            reject("ERROR: Something went wrong")
        }
    }, 2000)
})

promiseFour
.then( (user) => {
    console.log(user);
    return user.username
    
})
.then( (username) => {
    console.log(username);
    
} )
.catch( function(error){
    console.log(error);
    
})
.finally( () => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise( (resolve, reject) => {
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"latte", password:"123"})
        } else{
            reject("ERROR: JS went wrong")
        }
    }, 2000)
});

async function consumePromiseFive(){
    
    try{
        const response = await promiseFive
        console.log(response);

    }catch(error){
        console.log(error);
        
    }
}

consumePromiseFive()

// async function getUser() {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// }

// getUser()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => response.json())
.then( (data) => console.log(data))
.catch( (error) => console.log(error))