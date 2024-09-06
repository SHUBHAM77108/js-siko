// const product1 = {
//     product: 'basketball',
//     price: 2095
// }

// product1.price = 500; // update price from 2095 to 500

// product1['delivery-time'] = '3days';

// console.log(product1);

function comparePrice (product1,product2) {
if (product1.price < product2.price) {
        return product1;
    } else {
        return product2;
    }
}

const product1 = {
    name: 'basketball',
    price: 2095
};

const product2 = {
    name: 'socks',
    price: 1090
};

const product3 = {
    name: 'basketball',
    price: 2095
}

console.log(comparePrice(product1,product2));

function isSameProducts(product1,product2) {
    return (product1 === product2 && product1 === product2);
} // This code allways give false because we've comparing object. objects are comparing there references not a value that way we compare values inside the both objects

function isSameProducts(product1,product2) {
    return (product1.name === product2.name && product1.price === product2.price);
}

console.log(isSameProducts(product1, product2));
console.log(isSameProducts(product1, product3));

console.log('Good Morning'.toLowerCase());
console.log('TESTING'.toLowerCase());

console.log('hello'.repeat(2));
console.log('test'.repeat(3));