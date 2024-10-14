//**** */ 1. for Loop *******************************
// Definition:
// The for loop is the most traditional looping method used to iterate over elements based on a set number of times. It allows you to loop through arrays, strings, or even custom loops.

// Syntax:
// for (initialization; condition; increment/decrement) {
//     // Loop body
// }


// Example:
const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Will log 10, 20, 30
}


// Use Case:
// Array iteration where you need access to both the index and the value.
// Custom loops with precise control over the iteration logic (like skipping values or reversing).

//**** */ 2. for...of Loop *******************************
// Definition:
// The for...of loop is used to iterate over iterable objects like arrays, strings, sets, and maps. It directly gives the values (not the index) of the collection you're looping over.

// Syntax:
// for (const element of iterable) {
//     // Loop body
// }

// Example:
const arr2 = [10, 20, 30];
for (const value of arr2) {
    console.log(value); // Will log 10, 20, 30
}


// Use Case:
// Best used when you only need the values from an array, string, or any iterable.
// Cannot be used for objects (non-iterable) unless you use Object.keys() or similar methods.
// Important Point:
// It doesn't give you the index. If you need the index, you have to use additional logic (like arr.entries()).


//**** */ 3. for...in Loop *******************************

//Definition:
// The for...in loop is used to iterate over the keys (or property names) of an object or the indexes of an array. It is specifically meant for looping over objects and should be used with caution when looping over arrays.

//Syntax:
//for (const key in object) {
    // Loop body
// }

// Example (with Object):
const obj = { name: 'John', age: 25, country: 'USA' };
for (const key in obj) {
    console.log(key); // Will log 'name', 'age', 'country'
    console.log(obj[key]); // Will log 'John', 25, 'USA'
}

//Example (with Array):
const arr3 = [10, 20, 30];
for (const index in arr) {
    console.log(index); // Will log '0', '1', '2' (indexes as strings)
    console.log(arr[index]); // Will log 10, 20, 30 (values)
}

// Use Case:
// Best used when you need to iterate over the keys of an object.
// Can also be used with arrays, but it's not recommended because for...in gives keys as strings (not numbers), and it may also iterate over inherited properties, which is usually not desired for arrays.

// Key Differences Between for, for...of, and for...in:

// Loop Type:-     for
// Best for:-      Arrays and custom loops
//Iterates Over:-  All elements of the array or a string	
// Returns:-       Index and value (manually)	
// Use Case:-      Full control over index and iteration logic.

// Loop Type:-     for...of
// Best for:-      Arrays, strings, sets, maps
//Iterates Over:-  Values of an array, string, or iterable	
// Returns:-       Value	
// Use Case:-      Easy way to get values of iterables.

// Loop Type:-     for...in	    
// Best for:-      Objects (and arrays, with caution)
//Iterates Over:-  Keys of an object (or array indices)	
// Returns:-       Key (or index in arrays)	
// Use Case:-      Best for object key-value iteration.


// Examples of Each Loop:

// for loop:
const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index: ${i}, Value: ${fruits[i]}`);
}
// for...of loop:
const fruits2 = ['apple', 'banana', 'cherry'];
for (const fruit of fruits2) {
    console.log(fruit);  // Directly gives the values
}
// for...in loop:
const person = { name: 'Alice', age: 30, city: 'New York' };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);  // Loops over object keys
}


// Conclusion:
// Use for when you need to manually control looping (index manipulation, custom conditions).
// Use for...of when you just need values from an iterable (array, string, set, etc.).
// Use for...in for iterating over object properties, and use it cautiously with arrays to avoid unwanted behavior. 


// Question:
// 1> Using for...of:
// Write a function logFruits that uses a for...of loop to log each fruit in the fruits array.

const fruits3 = ['apple', 'banana', 'cherry'];

function logFruits (fruits) {
    for (const fruit of fruits) {
        console.log(fruit);
    }
}

logFruits(fruits);

// 2> Using for...in:
// Write a function logFruitQuantities that uses a for...in loop to log each fruit and its quantity from the fruitQuantities object.

const fruitQuantities = {
    apple: 5,
    banana: 3,
    cherry: 10
};

function logFruitQuantities (fruitQuantities) {
    for (const key in fruitQuantities) {
        console.log(`${key}: ${fruitQuantities[key]}`);
    }
}

logFruitQuantities(fruitQuantities);