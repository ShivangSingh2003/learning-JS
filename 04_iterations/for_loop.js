//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
}

let heros = ["batman", "ironman", "spiderman"]

for (let index = 0; index < heros.length; index++) {
    const element = heros[index];
    // console.log(element);
    
}

//break and continue

// for (let index = 1; index <= 20; index++) {
//     const element = index;
//     if(index == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    const element = index;
    if(index == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}