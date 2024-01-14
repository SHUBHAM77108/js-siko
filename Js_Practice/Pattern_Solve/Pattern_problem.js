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

// let n = 4; 
// let string = ""

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n+1-i; j++){
//         string += j
//     }
//     string += "\n"
// }
// console.log(string);

// 7 Pattern

// 1
// 13
// 135
// 1357

// let n = 4; 
// let string = ""

// for(let i = 1; i <= n; i++){
//     let a = 1
//     for(let j = 1; j <= i; j++){
//         string += a
//         a = a + 2
//     }
//     string += "\n"
// }
// console.log(string);

// 8 Pattern

// A B C D
// A B C D
// A B C D
// A B C D

// let n = 4;
// let string = ""
// for(let i = 1; i <= n; i++){
//     let a = 1;
//     for(let j = 1; j <= n; j++){
//         let d = a + 64
//         string += String.fromCharCode(d) + " "
//         a++;
//     }
//     string += "\n"
// }

// console.log(string)


// 9 Pattern

// A 
// A B 
// A B C 
// A B C D

// let n = 4;
// let string = ""
// for(let i = 1; i <= n; i++){
//     let a = 1;
//     for(let j = 1; j <= i; j++){
//         let d = a + 64
//         string += String.fromCharCode(d) + " "
//         a++;
//     }
//     string += "\n"
// }

// console.log(string)

// 10 Pattern 

// let n = 4;
// let string = ""
// for(let i = 1; i <= n; i++){
//     let a = 1;
//     for(let j = 1; j <= i; j++){
//         let d = a + 64
//         string += String.fromCharCode(d) + " "
//         a++;
//     }
//     string += "\n"
// }

// console.log(string)

// 11 Pattern 

// 1
// A B
// 1 2 3
// A B C D
// 1 2 3 4 5

// let n = 5
// let string = ""
// for (let i = 1; i <= n; i++){
//     let a = 1;
//     for(let j = 1; j <= i; j++){
//         let d = a + 64;
//         if (i % 2 == 0){
//             string += String.fromCharCode(d)
//         } else {
//             string += j
//         }
//         a++
//     }
//     string += "\n"
// }
// console.log(string)

// 12 Pattern 

// # # * # #
// # # * # #
// * * * * * 
// # # * # #
// # # * # #

let n = 5;
let string = ""

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n; j++){
        // let a = n/2 + 1
        if (j == n/2 +1 || i == n/2 +1){
            string += "*"
        } else {
            string += "/"
        }
    }
        string += "\n"
}
console.log(string)