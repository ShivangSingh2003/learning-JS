const name = "Shivang"
const repoCount = 50

console.log(name + repoCount + " Value"); // outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // modern syntax using string interpolation

const gameName = new String("ShivangSS")
console.log(gameName[0]); //key value pair

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName);
// console.log(gameName.toUpperCase());
// console.log(gameName);

console.log(gameName.charAt(2))
console.log(gameName.indexOf('v'))

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-7,-2)
console.log(anotherString);

const str = "    Shiv      "
console.log(str);
console.log(str.trim());

const url = "https://shiv.com/shivang%20singh"

console.log(url.replace('%20', '-'));

console.log(url.includes('https'));

const str2 = "My name is Shivang Singh"

const str3 = str2.replaceAll(' ', '-')
console.log(str2.replaceAll(' ', '-'))
console.log(str3.split('-'));



