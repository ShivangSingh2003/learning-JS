const languages = ["js", "rb", "java", "Cpp", "py"]

// languages.forEach(function (item) { //call back function
//     console.log(item);
    
// })

// languages.forEach( (item) => {
//     console.log(item);
    
// })

// function print(item){
//     console.log(item);
    
// }

// languages.forEach(print)

// languages.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "javascript",
        fileName: "js"
    },
    {
        languageName: "ruby",
        fileName: "rb"
    },
    {
        languageName: "python",
        fileName: "py"
    }

]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
    
} )

//for each loop does not return any value
// const values = languages.forEach( (item) => {
//     console.log(item);
    
// } )

// console.log(values);  //undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter returns values
const nums = myNums.filter( (num) => num>4 )

console.log(nums);

const newNums = []

// myNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === "Non-Fiction" )

  userBooks = books.filter( (bk) =>  bk.publish >= 1990 && bk.genre === "History")
  console.log(userBooks);
  
