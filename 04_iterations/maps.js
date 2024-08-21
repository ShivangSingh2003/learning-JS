//Maps hold key value pairs. They remember the order of the pairs. They hold unique values.

const map = new Map()

map.set("IN", "India")
map.set("IN", "India")//visible only once...no duplicate values
map.set("CN", "China")
map.set("FR", "France")

// console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(`The key is ${key} and the value is ${value}`);
}

//objects are not iterable with for of loop
