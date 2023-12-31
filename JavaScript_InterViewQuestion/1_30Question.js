// // Q1- Given a string, reverse each word in the sentence

var str = "saare jaha se achha hindustaan humara"

var savedStr = str.split(" ")
.map(function(word){
    return word.split("").reverse().join("")
})

// console.log(savedStr.join(" "));

// ============================================
// Q2- how to check if an object is an array or not? Provide some code.

function checkArray(elem){
   return Array.isArray(elem)
}

// console.log(checkArray([]))
// console.log(checkArray({}))


// ============================================
// Q3- How to empty an array in javascript?
// do not reset it to new array, add do not loop through to pop each value

// const arr = [1,2,3,4,5,6]
// arr.length = 0

// ============================================
// Q4- How would you check if a number is an integer?

var a = 11.1;
if (a%1 === 0){
    // console.log("integer")
}
else{
    // console.log("!Not a integer")
}
// ============================================
// Q5- Make this  work : 
duplicate ([1, 2, 3, 4, 5]); // => [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr){
   return arr.concat(arr)
}

// console.log(duplicate([1,2,3,4,5]))


// ============================================
// Q6- Write a JavaScript function that reverse a number

function reverseKaro(num){
    return Number(num.toString().split("").reverse().join(""))
}

// console.log(reverseKaro(12))

function reverseKaro(num){
    var rev = 0
    while(num > 0){
    var rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10)
    }
    return rev;
} 

// console.log(reverseKaro(1234))


// ================================================
// Q7- Write a Javascript function that checks whether a passed sting is palindrome or not

function checkedPalString(str){
    var reversed = str.split("").reverse().join("")
    return reversed === str
}

// console.log(checkedPalString("LOOL"))
// console.log(checkedPalString("POOL"))

// ===============================================
// Q8- Write a Javascript function that returns a passed string with letters in aliphabetical order

function stringAlphaBeticalOrder(str){
    return str.split("").sort().join("");
}

// console.log(stringAlphaBeticalOrder("apple"))
// console.log(stringAlphaBeticalOrder("shubham"))

// =========================================

// Q9- Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function strConvertToUpperCase(str){
    var allwords = str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.substring(1)
    })
    console.log(allwords)
}

// strConvertToUpperCase("aur shubham bhai kya chal raha hai")

// -========================================-
// Q10 - Write a JavaScript function which accepts an argument and return the type 
// Note : There are six possible values that typeof return : object, boolean, function, number, string, and undefined

function typeTeller(elem){
    return typeof elem;
}

// console.log(typeTeller()) // undefined
// console.log(typeTeller(undefined)) // undefined
// console.log(typeTeller([])) // object
// console.log(typeTeller(12)) // number
// console.log(typeTeller("12")) // string
// console.log(typeTeller(true)) // boolean
// console.log(typeTeller(function () {})) // function

// -========================================-

// Q11 - Write a JavaScript function to get the number of occurrences of each letter in specified string 

function occ(str){
    var occurences = {}
    str.split("").forEach(elem => {
    if (occurences.hasOwnProperty(elem) === false){
        occurences[elem] = 1;
    } else{
        occurences[elem]++
    }
    });
    return occurences;
}

// console.log(occ("apple"))
// console.log(occ("shubham"))



// -=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=

// LOOPS  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// --------------------------------------------------------

// ========================================================
// Loop an array and add all members of it 

// var arr = [1, 2, 3, 4, 5, 6, 7];

// var sum = 0;

// arr.forEach((elem) =>{
//    return sum = sum + elem
// })

// console.log(sum)

// ========================================================

// in an array of number and Strings, only add those members which are not strings 

// var arr = ["shubham", 123, "LIC", 3, 4, "hdfc"]

// var sum = 0;

// arr.splice(" ").forEach(elem => {
//     if (typeof elem === 'number'){
//         sum = sum + elem
//     }
// })

// console.log(sum)

// =======================================================

// loop an array of object and remove all objects which don't have gender's value male

// var arr = [
//     {name: "Amit", gender: "female"},
//     {name: "abcd", gender: "nonspecified"},
//     {name: "Anil", gender: "male"},
//     {name: "Sonali", gender: "female"},
//     {name: "Pushpa", gender: "female"}
// ]

// var count = 0;

// arr.forEach(function(elem){
//     if(elem.gender !== "male") count++
// })

 
// for(var j=0; j <= count; j++){
// for(var i =0; i < arr.length; i++){
//     if(arr[i].gender !== "male"){
//         arr.splice(i, 1)
//     }
// }
// }

// console.log(arr)


// -=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=

// Array  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// --------------------------------------------------------

// // Write a JavaScript function to clone an array

// this  is using spread 
// function cloneArr(arr){
//     return [...arr]
// }

// var newarr = cloneArr([1, 2, 3, 4]);

// console.log(newarr)

// Using map 
function cloneArr(arr){
    return arr.map(function(e){
        return e;
    })
}

// console.log(cloneArr([1, 2, 3, 4]))

// function cloneArr(arr){
//     var newarr = [];
//     arr.forEach(function (elem) {
//         newarr.push(elem)
//     })
//     return newarr
// }

// var abcd = [1,2,3]

// var newarr = cloneArr(abcd)

// -======================================-

// Write a JavaScript function to get the first element of an Array. Passing a parameter 'n' will return the first 'n' element of the array

function retrieve(arr, n = 1){
    if(n <= arr.length){
    for(let i = 0; i <= n; i++){
        console.log(arr[a])
    }
} else{
    console.log(n + "to element he nahi hai")
}
}

// retrieve([1, 2, 3, 4, 5], 4)
// -======================================-

// Write a JavaScript function to get the last element of an array. passing a parameter 'n' will return the last 'n' elements of the array.

function retrieve(arr, n = 1){
    if(n <= arr.length){
    for(let i = 0; i < n; i++){
        console.log(arr[arr.length - 1 - i])
    }
} else{
    console.log(n + "to element he nahi hai")
}
}

// retrieve([1, 2, 3, 4, 5], 3)

// -======================================-

// Write a JavaScript program to find the most frequent item of an array 

function freq(arr){{
    var freq = {}
    arr.forEach(function(elem){
        if (freq.hasOwnProperty(elem)) freq[elem]++;
        else freq[elem] = 1;
    })
    var ans = Object.keys(freq).reduce(function(acc, next){
        return freq[acc] > freq[next] ? acc : next;
    })
    console.log(ans)
}}

// freq([1, 2,4, 3, 12, 2, 3, 12,4, 1, 2, 3,4, 2121]);

// Write a JavaScript program to shuffle an array 

function shuffleKaro(arr){
    // sabse pahle kitna area shuffle area hai
    var totalShuffleArea = arr.length;
    // ek random number nikaalo
    while (totalShuffleArea > 0){
        totalShuffleArea--;
        var indexToBeExchanged = Math.floor(Math.random()*totalShuffleArea);
        var temp = arr[totalShuffleArea];
        arr[totalShuffleArea] = arr[indexToBeExchanged]
        arr[indexToBeExchanged] = temp;
    }
    return arr;
}

console.log(shuffleKaro([1, 2, 3, 4, 5, 6, 7]))

// Write a JavaScript program to compute the union of two arrays
// Sample Data: 
// console.log(union([1, 2, 3], [100, 2, 1, 10]))
// [1, 2, 3, 10, 100]

function union(arr1, arr2){
    return [...new Set(arr1.concat(arr2))]
}

console.log(union([1, 2, 3, 4], [2, 3, 4, 6]))