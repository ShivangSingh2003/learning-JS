// for in loop can be used to iterate an object

const myObject = {
    js: "javascript",
    rb: "ruby",
    cpp: "C++"
}

for (const key in myObject) {
    // console.log(`${key} is abbreviation for ${myObject[key]}`);
    
    
}

const languages = ["js", "rb", "java", "Cpp", "py"]

for (const key in languages) {
    console.log(languages[key]);
    
}

//maps are not iterable with for in loop