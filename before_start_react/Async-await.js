// ✅ async/await

// Simple Definition:
// async/await JavaScript mein promises ko handle karne ka modern aur cleaner tareeka hai.

//It is used to write asynchronous code just like synchronous (normal) code.

// Kyu use karte hain? (Why use it?)
// 👉 Problem with .then().catch():
// Nested .then() lagate jao to code ugly aur unreadable ban jata hai = "Promise Hell"

// 👉 Solution: async/await
// Code clean dikhta hai.

// Try/catch se error handle hota hai.

// Easy to understand and debug.

// 🔹 Basic Syntax:
// async function functionName() {
//   try {
//     const result = await somePromise;
//     console.log(result);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// 🔹 Important Points:
// async:
// 	Function ko asynchronous banata hai (yeh hamesha promise return karega)

// await:
// 	Promise ke result ka wait karega (function ke andar hi use hota hai)
// try:
// 	Successful result ke liye
// catch:
// 	Agar koi error aaye to handle karne ke liye

async function getData() {
  // get request - async
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  // parse response to JSON - async
  let data = await response.json();

  console.log("Data fetched successfully:", data);
}

getData();
