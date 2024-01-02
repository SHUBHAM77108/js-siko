// // Q1- Given a string, reverse each word in the sentence

// var str = "saare jaha se achha hindustaan humara"

// var savedStr = str.split(" ")
// .map(function(word){
//     return word.split("").reverse().join("")
// })

// console.log(savedStr.join(" "));

// ============================================
// Q2- how to check if an object is an array or not? Provide some code.

// function checkArray(elem){
//    return Array.isArray(elem)
// }

// console.log(checkArray([]))
// console.log(checkArray({}))


// ============================================
// Q3- How to empty an array in javascript?
// do not reset it to new array, add do not loop through to pop each value

// const arr = [1,2,3,4,5,6]
// arr.length = 0

// ============================================
// Q4- How would you check if a number is an integer?

// var a = 11.1;
// if (a%1 === 0){
//     console.log("integer")
// }
// else{
//     console.log("!Not a integer")
// }
// ============================================
// Q5- Make this  work : 
// duplicate ([1, 2, 3, 4, 5]); // => [1,2,3,4,5,1,2,3,4,5]

// function duplicate(arr){
//    return arr.concat(arr)
// }

// console.log(duplicate([1,2,3,4,5]))


// ============================================
// Q6- Write a JavaScript function that reverse a number

// function reverseKaro(num){
//     return Number(num.toString().split("").reverse().join(""))
// }

// console.log(reverseKaro(12))

// function reverseKaro(num){
//     var rev = 0
//     while(num > 0){
//     var rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10)
//     }
//     return rev;
// } 

// console.log(reverseKaro(1234))


// ================================================
// Q7- Write a Javascript function that checks whether a passed sting is palindrome or not

// function checkedPalString(str){
//     var reversed = str.split("").reverse().join("")
//     return reversed === str
// }

// console.log(checkedPalString("LOOL"))
// console.log(checkedPalString("POOL"))

// ===============================================
// Q8- Write a Javascript function that returns a passed string with letters in aliphabetical order

// function stringAlphaBeticalOrder(str){
//     return str.split("").sort().join("");
// }

// console.log(stringAlphaBeticalOrder("apple"))
// console.log(stringAlphaBeticalOrder("shubham"))

// =========================================

// Q9- Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

// function strConvertToUpperCase(str){
//     var allwords = str.split(" ").map(function(word){
//         return word.charAt(0).toUpperCase() + word.substring(1)
//     })
//     console.log(allwords)
// }

// strConvertToUpperCase("aur shubham bhai kya chal raha hai")

// -========================================-

// Q11 - Write a JavaScript function to get the number of occurrences of each letter in specified string 