//arrays
// arrays in JS are resizeable and can contain a mix of DataTypes
// JS array copy operations create shallow copies => changes in the copy change the source as well
const myArr = [0, 1, 2, 3, 4, 5]
const heroes = ["ironman", "superman", "batman"]
const myArr2 = new Array(1, 2, 3, 4, 5)

console.log(myArr[3]);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) //adds value to the  first position....considered a bad practice because all the values in the array have to be shifted
console.log(myArr)

myArr.shift()
console.log(myArr);

console.log(myArr.includes(3));
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

const array = new Array(1, 2, 3, 4, 5, 6)
const arr2 = array.slice(2,5)
console.log("Original ArraY : ", array);
console.log("Array with slice values : ", arr2);

// Splice changes/manipulates the original array and includes the range in the output aswell

const arr3 = array.splice(2,5)
console.log("Original ArraY : ", array);
console.log("Array with splice values : ", arr3);
