//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());

//let myCreatedDate = new Date(2024, 7, 18)
//let myCreatedDate = new Date(2024, 7, 18, 22, 20)
let myCreatedDate = new Date("2024-08-18")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//to convert time from milliseconds to seconds
//console.log(Math.floor(myCreatedDate.getTime()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1); //months start from 0 => Jan = 0th month
console.log(newDate.getDay());



console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'UTC'
}));
