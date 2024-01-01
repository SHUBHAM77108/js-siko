const arr = [1, 2, 3]

const initialvalue = 3;

const sumwithinitial = arr.reduce( (acc, currval) => {
    console.log(`acc: ${acc} and currval:${currval}`)
    return acc + currval
}, initialvalue)

// console.log(sumwithinitial)

const shoppingCart = [
    { 
        itemName: "data science cource",
        price: 12999
    },
    { 
        itemName: "py cource",
        price: 999
    },
    { 
        itemName: "js cource",
        price: 2999
    },
    { 
        itemName: "mobile dev cource",
        price: 5999
    },
]

const priceToPay =  shoppingCart.reduce( (acc, item) =>  acc + item.price, 0)

console.log(priceToPay)