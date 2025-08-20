// Promise JavaScript ka ek object hota hai jo future mein kisi asynchronous kaam ke complete hone ya fail hone ka result batata hai.

// 🟢 then():
// Jab promise successfully complete ho jata hai (resolve hota hai), tab .then() ka use hota hai.

// 🔴 catch():
// Agar promise fail ho jata hai (reject hota hai), to .catch() ka use hota hai error handle karne ke liye.

// 🔹 Syntax (Structure):
// const promiseName = new Promise((resolve, reject) => {
//   // async task
//   if (success) {
//     resolve("Data mil gaya");
//   } else {
//     reject("Kuch galat ho gaya");
//   }
// });

// promiseName
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

//   🔹 Kab Use Karte Hai?
// Jab aapko koi asynchronous kaam karna ho (jaise: API call, file read, setTimeout, DB fetch, etc.)

// Jab aapko success aur failure dono handle karne ho.

const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = false;

    if (success) {
      resolve("Data successfully mil gaya");
    } else {
      reject("Data fetch karne mein error aayi hai");
    }
  }, 2000);
});

// getData
//   .then((data) => {
//     console.log("✅" + data);
//   })
//   .catch((err) => {
//     console.log("❌" + err);
//   });

// this is called promice chaning
getData
  .then((msg) => {
    console.log("data mil gaya bhai: ", msg);
    return "Promise fulfilled second message";
  })
  .then((msg) => {
    console.log("msg second: ", msg);
    return "Promise fulfille third message";
  })
  .then((msg) => {
    console.log("msg third: ", msg);
  })
  .catch((error) => {
    console.log("error: ", error);
  })
  .finally((msg) => {
    console.log(
      "mian to final hua, har bar chalunga then aur catch chal na chal"
    );
  });

// aur promise all ka bhi property hai jo uses kar saktha hai jab bhot sara multiple promise ho to ek sa kar sakt hai

let Promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "first");
});
let Promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "second");
});
let Promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 5000, "third");
});

// agar sab promice resolve hua to tabai then kam karaga nahi to ek bhi reject hua to catch kam karaga aur jo sab sa phile reject hua vha error dega catch main

Promise.all([Promise1, Promise2, Promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error("error: " + error);
  });

//🔹 Breakdown (Line by Line):
// new Promise() – Promise banaya.

// resolve() – kaam sahi hua to ye chalega.

// reject() – kuch galat hua to ye chalega.

// .then() – jab promise resolve ho jaye to ye function chalega.

// .catch() – jab promise reject ho jaye to ye error handle karega.

// 🔹 Ek aur chhota Example (Math Operation):

const divide = new Promise((resolve, reject) => {
  const a = 10;
  const b = 0; // Agar b=0 ho to error aayega

  if (b !== 0) {
    resolve(a / b);
  } else {
    reject("B ko zero mat rakho! Division by zero error.");
  }
});

divide
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Division operation complete");
  });

// 🔹Pratice promice then catch:
// ✅ Practice Question 1:
// Ek promise banao jo 2 second baad "Hello Shubham!" return kare.

const greet = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Shubham!");
  }, 2000);
});

greet
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// ✅ Practice Question 2:
// Ek promise banao jo check kare ki number even hai ya odd.
// Agar even ho to resolve karo "Even number", agar odd ho to reject karo "Odd number".

let num = 7;

const checkEvenOdd = new Promise((resolve, reject) => {
  if (num % 2 === 0) {
    resolve("Even number");
  } else {
    reject("Odd number");
  }
});

checkEvenOdd
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

// ✅ Practice Question 3:
// Ek function loginUser(username, password) banao jo promise return kare:
// Ager username "admin" aur password "1234" ho to resolve karo: "Login Successful"
// Nahi to reject karo: "Invalid Credentials"

function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "1234") {
      resolve("Login Successful");
    } else {
      reject("Invalid Credentials");
    }
  });
}

loginUser("admin", "1234")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// Agar hum chatha hai ki async/await bhi sikha sakte hai to use huma pronise ka modern version hota hai
