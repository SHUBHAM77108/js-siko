// **Destructuring in Object** 
// -- Accessing Object the old way 

// let person = {
//     firstName: 'shubham',
//     lastName: 'Vish'
// };

// let personFirstName = person.firstName // -- Old way
// let personLastName = person.lastName

// console.log(personFirstName);
// console.log(personLastName);


// *************************************
// -- Access Objecta the New way

// let {firstName, lastName} = person; // -- new way

// console.log(firstName);
// console.log(lastName);


// *************************************
// -- We can also RENAME the variables with the New way

// let {firstName: fName, lastName: lName} = person;

// console.log(fName);
// console.log(lName);

// *************************************
// -- What happens if you destruct a property that does not exist

// let {firstName, lastName, middleName} = person;
// console.log(middleName); // undefined

// --- Setting defaults when object destructuring

// let person2 = {
//     firstName1: 'abhi',
//     lastName1: 'vish',
//     currentAge: 28
// };

// let {firstName1, lastName1, middleName = '', currentAge: age = 20} = person2;

// console.log(middleName); // ''
// console.log(age); // 28


// ************---------***********
// **Destructuring in array**

// const arr = [1, 2, 3];

// Prior to ES6, when you want to assign the elements of the array to variables, you typically do it like this:

// let x = arr[0]; // --
// let y = arr[1];
// let z = arr[3];

// **************************************

// But NOW ES6 introduces the array destructuring syntax that provides an alternative way to assign elements of an array to variables:

// let [x, y, z] = arr; // --

// **************************************

/*
Let's see the syntax based on this example.
The left-hand side of the assignment is an array of variables, and the right-hand side is an array of values. The array elements are assigned in order, with the first element of the array going to the first variable, and so on. 

For example, if you have an array of multiple values, you can assign them to multiple variables like this:
*/

// let [a, b, c, d] = [1, 2, 3, 4]; // --

// *******************************************
// Skipping items when array destructuring

// const arrvalue = ['one', 'two', 'three'];

// destructuring assignment in array
// const [x, ,z] = arrvalue;

// console.log(x); // one 
// console.log(z); // three

// *************--------------**************
/* Assign Remaining Elements to single Variable

You can assign the remaining elements of an array to a varaiable using 
the spread syntax ' ... '
*/

// const names = ['subham', 'jay', ' ','abhi','kabi'];

// destructuring assignment in array
// assigning remaining elements to y
// const [x, a, ...y] = names;

// console.log(x); // subham
// console.log(a); // jay
// console.log(y); // [' ', 'jay', 'abhi', 'kabi']


// This trick works in object destructuring too!

// const person3 = {
//     name: 'shub',
//     age: '23',
//     gender: 'Male'
// };

// destructuring assignment
// assiging remaining properties to rest
// let {name, ...rest} = person3;

// console.log(name); // shub
// console.log(rest); // {age: 23, gender: "Male"}

// !Note: The variable with the spread syntex cannot have a  trailing comma ,.You should use this rest elements (variable with spread syntax) as the last variable. For example:

// const names = ['shubham', 'jay', 'kabi', 'nabi','tabi','labi'];

// throws an error
// const [...x, y] = names;
// const [y, ...x] = names;
// console.log(x);

// ***************************************

// In this example, two variables are swapped using the destructuring assignment syntax:
// let namel = 'shub';
// let name2 = 'kab';

// swapping variables
// [namel, name2 = name2, name1];

// console. log (namel) ; // shub
// console. log (name2) ; // kab

// ***************************************
// A function may return an object or null in some situations.
// For example:
// function getPerson() {
//     return null;
// }
// let { firstName, lastName } = getPerson();
// console.log(firstName, lastName); // This will throw an error

// You can avoid this, you can use the OR operator (II) to fallback the null object to an empty object:
// let { firstName, lastName } = getPerson() || {};

// console. log (firstName, lastName); // undefined



// ************-----------------*************

// Nested Object Destructuring
// Assuming that you have an member in the PAPAFAM where the object has a name object as the property:

// let member = {
//     id: 1,
//     name: {
//         firstName: 'shubh' ,
//         lastName: 'dbhu'
//     }
// };

// Heres how to destructure it...
// let {name: { firstName, lastName }} = member;

// let {id, name: { firstName, lastName }} = member; // 

// console.log(firstName); //shubh
// console.log(lastName); //dhub

// It's possible to destructure nested properties as well as the parent property:
// let member = {
//     id: 1,
//     name: {
//         firstName: 'shubham' ,
//         lastName:'vish'
//     }
// };
// let {
//     name: {
//     firstName,
//     lastName
// },name } = member;

// console.log(firstName); // shubham
// console.log(lastName); // vish
// console.log(name); // { firstName: 'shubham', lastName: 'Vish'}



// ***********-----------****************
// Destructuring Function Arguments
// Here's how you destructure the arguments:

let displayFullName = ({firstName, lastName}) => `${firstName} ${lastName}`;
    let person = {
    firstName: 'shubham',
    tastName: 'Vish'
};

displayFullName(person);

// Compare the two...

// let displayFullName = (person) => `${person.firstName} ${person.lastName}`;
// let displayFullName = ({firstName, lastName}) => `${person.firstName} ${person.lastName}`;

// The ES6 is the cleaner approach once practiced several times!