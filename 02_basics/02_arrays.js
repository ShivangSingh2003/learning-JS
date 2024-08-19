const marvel_heros = ["Ironman", "Spiderman", "Thor"]
const dc_heros = ["batman", "flash", "superman"]

//marvel_heros.push(dc_heros) //inserts entire array as a single element 
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

//.push adds elements in the same array whereas concat returns a new array

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

//spread operator spreads an array into its individual elements
const new_array = [...marvel_heros, ...dc_heros]
//console.log(new_array);

const another_array = [1, 2, 3, [4,5,6], 7, 8, [9, 10, [11, 12]]]

const flat_another_array  = another_array.flat(Infinity)//Infinity or the value till which depth we want the array to be sorted
console.log(flat_another_array);

console.log(Array.isArray("Shivang"));
console.log(Array.from("Shivang"));
console.log(Array.from({name: "Shivang"})); // returns an empty array....we need to specify from what it needs to make the array->the keys or the values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

