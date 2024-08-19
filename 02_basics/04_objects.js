//const instaUser = new Object() //singleton object

const instaUser = {
    id: "123abc",
    name: "Shiv"
}

// instaUser.id = "123abc"
// instaUser.name = "Samay"
instaUser.isLoggedIn = false
// console.log(instaUser);

const user = {
    email: "abc@xyz.com",
    fullname: {
        userfullname: {
            firstname: "Rohit",
            lastname: "Shetty"
        }
    }
}

// console.log(user);
// console.log(user.fullname);
// console.log(user.fullname.userfullname);
// console.log(user.fullname.userfullname.firstname);
// console.log(user.fullname?.userfullname.firstname); // ? used with APIs incase we don't know for sure if that key is present...saves if-else conditions

const obj1 = {1: "a", 2: "b"}
const obj2 = {2: "c", 3: "d"}

//incorrect way to combine two objects
// const obj3 = {obj1, obj2}

//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "shiv@email.com"
    },
    {
        id: 1,
        email: "shiv@email.com"
    },
    {
        id: 1,
        email: "shiv@email.com"
    },
]

users[1].email
console.log(instaUser);
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty("isLoggedIn"));
console.log(instaUser.hasOwnProperty("isLoggedOut"));
