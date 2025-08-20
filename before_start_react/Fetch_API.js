//fetch() is a modern way in JavaScript to make HTTP requests (like GET, POST, etc.) to a server (like getting data from an API or sending form data).

//Ye Promise-based hota hai — iska matlab ye async/await ya .then() se kaam karta hai.

// 🔹 Syntax of fetch()
// fetch(url, options)
//   .then(response => response.json()) // convert response to JSON
//   .then(data => console.log(data))   // use the data
//   .catch(error => console.error(error)); // error handle

// ✅ Example 1: Simple GET request

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // JSON mein convert karo
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//   🧠 Explanation:

// fetch('url'): URL se data get karo
// .then(response => response.json()): Response ko JSON format mein convert karo
// .then(data => {...}): JSON data ko use karo
// .catch(): Agar koi error aaya to usko handle karo

// ✅ Example 2: Using async/await for the same GET request
async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getPost();

// ✅ Example 3: POST request (sending data)

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // POST request
  headers: {
    "Content-Type": "application/json", // Data type
  },
  body: JSON.stringify({
    title: "shubham post",
    body: "This is a post from Shubham",
    userId: 1,
  }), // Data to send
})
  .then((response) => response.json()) // JSON mein convert karo
  .then((data) => {
    console.log("Data sent successfully:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//   🧠 Explanation:
// method: 'POST': POST request bhejna hai

// headers: Batate hain ki data ka format JSON hai

// body: Hum jo data bhejna chahte hain, use JSON.stringify() karke bhejte hain

// eg
const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("getting data ....");
  let response = await fetch(URL);
  console.log(response); // This response in JSON format that's way it's is not usable data // this is a first data
  let data = await response.json(); //use call response using json method to get data in usable and json is also a asynchronous JS that's way we use await // this is a second data
  // console.log(data.title);
  factPara.innerHTML = data.title;
};

// we can aslo do the same think using promice chain
// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factPara.innerHTML = data.title;
//     });
// }

btn.addEventListener("click", getFacts);
