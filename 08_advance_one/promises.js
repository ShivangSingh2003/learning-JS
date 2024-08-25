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