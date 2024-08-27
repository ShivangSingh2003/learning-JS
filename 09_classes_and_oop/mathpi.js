// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor); 

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const chai = {
    name: 'ginger chai',
    price: 25,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai went bad");
        
    }
}

// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false 
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);  //if enumerable property is set to false, that property cannot be iterated
}
    
}