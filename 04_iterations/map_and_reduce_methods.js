const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num+10 )


// chaining -> use of multiple methods at once
const newNums = myNumbers
                .map( (num) => num*10 )
                .map( (num) => num+1 )
                .filter( (num) => num>=40 )

console.log(newNums);

const myNums = [1, 2, 3, 4, 5]
const initialVal = 0

const total = myNums.reduce( (acc, currVal) => acc+currVal, initialVal)  //reduce((accumulator, current value) => { return accumulator + current value}, initial value)

console.log(total);

const shoppingCart = [
    {
        itemName: "smartphone",
        price: 24999
    },
    {
        itemName: "jeans",
        price: 1999
    },
    {
        itemName: "shoes",
        price: 2999
    }
]

const totaValue = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(totaValue);
