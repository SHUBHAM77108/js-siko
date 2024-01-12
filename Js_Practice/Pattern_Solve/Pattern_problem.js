// first 

// 1234
// 1234
// 1234
// 1234

// let n = 4; 
// let string = ""

// for(let i = 1; i <= 3; i++){
//     for(let j = 1; j <= n; j++){
//         string += j
//     }
//     string += "\n"
// }
// console.log(string);


// 2 Pattern

// *
// **
// ***
// ****

// let n = 4; 
// let string = ""

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         string += "*"
//     }
//     string += "\n"
// }
// console.log(string);

// 3 Pattern
// ****
// ***
// **
// *

// let n = 4; 
// let string = ""

// for(let i = 1; i <= n; i++){
//     for(let j = 4; j >= i; j--){
//         string += "*"
//     }
//     string += "\n"
// }
// console.log(string);

// one more way solve this problem for (let j = 1; j <= n+1-i)

// 5 Pattern 

// 1
// 12
// 123
// 1234

// let n = 4; 
// let string = ""

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         string += j
//     }
//     string += "\n"
// }
// console.log(string);

// 6 Pattern 
// 1234
// 123
// 12
// 1

let n = 4; 
let string = ""

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n+1-i; j++){
        string += j
    }
    string += "\n"
}
console.log(string);
