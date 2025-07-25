// Practice Questions
// 1-5: Using reduce
// 1> Given an array of numbers, use reduce to find the sum of all even numbers using array destructuring inside the reduce function.

const NumOFArray = [1, 2, 3, 4, 5];

// function sumEvenNumbers(arr) {
//   return arr.reduce((sum, num) => {
//     return num % 2 === 0 ? sum + num : sum;
//   }, 0);
// }

function sumEvenNumbers([first, ...rest]) {
  if (first === undefined) return 0;
  return (first % 2 === 0 ? first : 0) + sumEvenNumbers(rest);
}

console.log(sumEvenNumbers(NumOFArray));

// 2> Use reduce to convert an array of objects (students with name and marks) into an object where the keys are student names and values are their marks.

const people = [
  { name: "Aman", age: 25 },
  { name: "Shubham", age: 24 },
  { name: "Rahul", age: 22 },
];

const peopleObj = people.reduce((acc, { name, age }) => {
  acc[name] = age;
  return acc;
}, {});

console.log(peopleObj);

// 3> Given an array of words, use reduce to return an object where each key is the word, and the value is its count (frequency count).

const arrayOfWords = ["Kabhi", "Kabhi", "Mera", "Dil", "Mina"];

const objOfArrayWord = arrayOfWords.reduce((acc, elem) => {
  let count = 0;
  // if (acc[word] === undefined) {
  //     acc[word] = 1;
  // } else {
  //     acc[word]++;
  // }
  // avaScript me kuch special values falsy hoti hain, matlab yeh truthy nahi hoti:false. > 0 ,""  (empty string), null, undefined, NaN

  // acc["apple"] = (acc["apple"] || 0) + 1; // undefined || 0 = 0 + 1 = 1
  // acc["apple"] = (acc["apple"] || 0) + 1; // 1 || 0 = 1 + 1 = 2
  acc[elem] = (acc[elem] || 0) + 1;
  return acc;
}, {});

console.log(objOfArrayWord);

// 4> Given an array of products with price, use reduce to calculate the total price, but use an arrow function inside `reduce

const arrayOfProductPrice = [500, 399, 79, 56, 245];
// ["T-shirt", "Shirt", "book", "Video Game", "laptop"];

const totalPriceOfProducts = arrayOfProductPrice.reduce(
  (acc, ele) => (acc = acc + ele),
  0
);

console.log(totalPriceOfProducts);

// ok alternat Way
const products = [
  { name: "T-shirt", price: 500, quantity: 3, tax: 11 },
  { name: "Shirt", price: 399, quantity: 4, tax: 10 },
  { name: "Book", price: 79, quantity: 3, tax: 3 },
  { name: "Video Game", price: 56, quantity: 1, tax: 2.6 },
  { name: "Laptop", price: 245, quantity: 2, tax: 9 },
];

const totalPrice = products.reduce((acc, { price }) => acc + price, 0);

console.log("Total Price:", totalPrice);

// 4 Given an array of objects {price, quantity}, use reduce to calculate the total amount (price * quantity) and store the result inside an object literal.

const totalPriceOfQuantity = products.reduce(
  (acc, { price, quantity }) => {
    acc.total += price * quantity;
    return acc;
  },
  { total: 0 }
);

console.log(totalPriceOfQuantity);

// 5 Create a function that takes an array of numbers and returns the maximum number using reduce and an arrow function.

const maximumNum = [-500, -399, -601, -89, -56, -245];

const arrayOfNum = maximumNum.reduce((acc, e) => (acc < e ? e : acc));
console.log(arrayOfNum);

// 6-10: forEach()

//6 Use forEach to log each element of an array after a 1-second delay using setTimeout.

// arrayOfWords.forEach((e, index) => {
//   setTimeout(() => {
//     console.log(e);
//   }, index * 1000);
// });

//7 Given an array of user objects {name, age}, use forEach with destructuring to print names.

people.forEach(({ name, age }) => {
  console.log(name);
});

//8 Implement forEach with setInterval to print numbers every second until it reaches the last element.

// NumOFArray.forEach((elem, index) => {
//   setTimeout(() => {
//     console.log(elem);
//   }, index * 2000);
// });

//9 Use forEach to double the values of an array and store them in a new array using object literals.

let newArray = [];
NumOFArray.forEach((elem, i) => {
  // newArray[i] = elem * 2;
  newArray.push(elem * 2);
});
console.log(newArray);

// 11-15: filter()
//11 Given an array of numbers, use filter to return only odd numbers using an arrow function.

const oddNum = NumOFArray.filter((num) => num % 2 !== 0); // shortest way to do single line output we don't need to use {} return statement it will be return automatic
console.log(oddNum);

// 12 Given an array of objects {name, salary}, filter out users who earn less than 5000, using destructuring.

const employees = [
  {
    name: "shubham",
    salary: 7000,
  },
  {
    name: "kamam",
    salary: 3900,
  },
  {
    name: "tamam",
    salary: 8990,
  },
  {
    name: "Array",
    salary: 500,
    agr: 29,
  },
  {
    name: "Anchor",
    salary: 5999,
    age: 21,
  },
];

const filterEmployee = employees.filter(({ name, salary }) => salary >= 5000);

console.log(filterEmployee);

const names = filterEmployee.map(({ name }) => name);
console.log(names);

// 13 Use filter to get all strings that contain more than 5 letters from an array.

let arrayOfStrings = [
  "Hello",
  "World",
  "Anchor",
  "Example",
  "TooShort",
  "Array",
];

const filterStr = arrayOfStrings.filter((str) => str.length > 5);
console.log(filterStr);

// 14 Use filter to extract names starting with 'A' from an array of objects {name, age}.

// const filterName = employees.filter(({ name, age }) => name.charAt(0) === "A");

// Alternative way
const filterName = employees.filter(({ name }) => name.startsWith("A"));

// console.log("name Start with A: ", filterName);

// 15 Create a function that uses filter with setTimeout to log filtered elements after 2 seconds.

// setTimeout(() => {
// console.log("Name starting with A:", filterName);
// }, 2000); if i need to print after every 2 sec to we should use forEach mathod

// 16-20: map()
//16 Given an array of numbers, use map to return a new array with each number squared.

const squaredOfArrayNUm = NumOFArray.map((elem) => elem * elem);

console.log(squaredOfArrayNUm);

// 17 Given an array of users {firstName, lastName}, use map with destructuring to return an array of full names.

const userObject = [
  {
    FirstName: "shubham",
    LastName: "Vish",
  },
  {
    FirstName: "abhi",
    LastName: "Vish",
  },
];

const extractFormUser = userObject.map(
  ({ FirstName, LastName }) => FirstName + " " + LastName
);

console.log(extractFormUser);

//18 Given an array of timestamps, use map to format them into HH:MM AM/PM format.
const timestamps = [
  1698291600000, // 10/26/2023, 10:00 AM
  1698334800000, // 10/26/2023, 10:00 PM
  1698378000000, // 10/27/2023, 10:00 AM
  1698421200000, // 10/27/2023, 10:00 PM
];

const formattedTimes = timestamps.map((timestamp) => {
  const date = new Date(timestamp); // convet timestamp to Date
  let hours = date.getHours(); // Extract hours
  const minutes = String(date.getMinutes()).padStart(2, "0"); //Extract minutes with leading zero
  const ampm = hours >= 12 ? "PM" : "AM"; //Determine AM or PM
  hours = hours % 12 || 12; // convert to 12-hour format

  return `${hours}:${minutes} ${ampm}`; // Format as HH:MM AM/PM
});

console.log(formattedTimes);

//19 Use map with setTimeout to log each modified element after a delay.

squaredOfArrayNUm.forEach((elem, index) => {
  setTimeout(() => {
    console.log(elem);
    console.log("Next number in 2 second...");
  }, index * 2000);
});

console.log("Processing...");

//20 Create a function that takes an array of product objects {price, tax} and returns an array with final prices after adding tax, using arrow functions.

const FinalPriceOfprd = products.map(({ price, tax }) => price + tax);
console.log(FinalPriceOfprd);

const calculateFinalPrice = (products) => {
  return products.map(({ price, tax }) => price + tax);
};

// const finalPrice = calculateFinalPrice(products); // saveing
console.log(calculateFinalPrice(products));
