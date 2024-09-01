// JavaScript Function Practice Questions 


console.log('1 >-------------------');

// 1 >---Question:
// Write a function named isEven that takes a number as an argument and returns true if the number is even, and false if it is odd. 


function isEven (number) {
    if (number % 2 !== 0) {
        return `${number} is an even number.`;
    } else {
        return `is an odd ${number}`;
    }
}

console.log(isEven(5));

console.log('2 >-------------------');

// 2 >---Question:
// Write a function named getGreeting that takes a string (name) as an argument and returns a greeting message like "Hello, [name]!".

function getGreeting (greeting){
    console.log(`Hello, ${greeting}`);
}

getGreeting('Shubham');

console.log('3 >-------------------');

// 3 >---Question:
// Write a function named isAdult that takes an age as an argument and returns true if the age is 18 or above, and false if it is less than 18.

function isAdult (name,adult) {
    // if (adult >= 16) {
    //     return `${name}, is an a adult person.`
    // } else {
    //     return `${name}, is not an a adult person.`
    // }
console.log(adult >= 16 ? `${name}, is an a adult person.` : `${name}, is not an a adult person.`);

}

isAdult('shubham', 18);
isAdult('abhi', 15);

console.log('4 >-------------------');

// 4 >---Question:
// Write a function named add that takes two numbers as arguments and returns their sum. Then, write another function named calculate that calls the add function with two numbers and returns the result.

function AddTakes (num1,num2){
    let sum = num1 + num2;
    return sum;
}

function calculateSumofnumber (anothernum1, anothernum2) {
    let AddTakes = calculateSumofnumber;
    return AddTakes;
}

console.log(calculateSumofnumber(5, 6));

console.log('5 >-------------------');

// 5 >---Question:
// Write a function named isPositive that takes a number as an argument and returns true if the number is positive, false if it is negative, and null if it is zero.


// i use a truthy and false value 
function isPositiveNumber (num) {
    // if (num >= 0) {
    //     console.log(`${num} is a true`);
    // } else {
    //     console.log(`${num} is a false value`);
    // }

    // same output using trenary operator
    num >= 0 ? console.log(`${num} is a true`) : console.log(`${num} is a false`)
}
isPositiveNumber(1);


console.log('6 >-------------------');

// 6 >---Question:
// Write a function named getLength that takes a string as an argument and returns the length of the string. Then, write another function named compareLengths that takes two strings, calls getLength for both, and returns the longer string.

// function getLength () {

// }

console.log('7 >-------------------');

// 7 >---Question
// Write a function named isEqual that takes two arguments and returns true if they are equal and false if they are not.

function isEqual (value1, value2) {
    return value1 === value2 ? `Both ${value1}, ${value2} are equal: true` : `Both ${value1}, ${value2} are not equal value: false`;
}

console.log(isEqual(5,'5'));
console.log(isEqual(5,"'shubham'"));


console.log('8 >-------------------');

// 8 >---Questions
// Write a function named getFirstCharacter that takes a string as an argument and returns the first character of the string. Then, write another function named isFirstCharacterA that uses getFirstCharacter and checks if the first character is 'A'.

// function getFirstCharacter () {

// }

console.log('9 >-------------------');

// 9 >---Questions
// Write a function named multiply that takes two numbers as arguments and returns their product. Then, write another function named square that uses multiply to return the square of a number.

console.log('10 >-------------------');

// 10 >---Questions
// Write a function named isLongerThan that takes two strings as arguments and returns true if the first string is longer than the second, and false otherwise.

function isLongerThanTwo (string1, string2) {
    let stringcount1 = 0;
    for (let i = 0; i < string1.length; i++) {
        stringcount1 += 1;
    }

    let stringcount2 = 0;
    for (let i = 0; i < string2.length; i++) {
        stringcount2 += 1;
    }
    return (stringcount2);
}
console.log(isLongerThanTwo("shubham","abhishekh"));

console.log('11 >-------------------');

// 11 >---Question
// Write a function named isUpperCase that takes a string as an argument and returns true if the string is in uppercase, and false otherwise.

function isUpperCase (isUpperCaseletter) {
   return isUpperCaseletter === isUpperCaseletter.toUpperCase() ? "The String is a UpperCase letter :True" : "The String is not a UpperCase letter :False";
}

console.log(isUpperCase('shubham')); //False
console.log(isUpperCase('SHUBHAM')); //True

console.log('12 >-------------------');

// 12 >---Question:
// Write a function named containsSubstring that takes two strings as arguments and returns true if the second string is a substring of the first, and false otherwise.

function containsSubstring (string1, string2){
    return string1.charAt(0) === string2.charAt(0) ? "The First charater of string one and two both are same: True" : "The First charater of string one and two both are not same: False";
}

console.log(containsSubstring('Summt', 'Summan'));
console.log(containsSubstring('Summt', 'dumman'));

console.log('13 >-------------------');

// 13 >---Question:
// Write a function named toUpperCaseString that takes a string as an argument and returns the string in uppercase.

function toUpperCaseString2 (uppercase) {
    return uppercase.toUpperCase();
}
console.log(toUpperCaseString2("amit")); // AMIT

console.log('14 >-------------------');

// 14 >---Question
// Write a function named isDivisibleBy that takes two numbers as arguments and returns true if the first number is divisible by the second, and false otherwise.

function isDivisibleBy (num1, num2) {
 return num1 % num2 === 0 ? `${num1} is divisible by ${num2}` : `${num1} is not divisible by ${num2}`
}

console.log(isDivisibleBy(10, 2));
console.log(isDivisibleBy(10, 3));


console.log('15 >-------------------');

// 15 >---Question
// Write a function named getLastCharacter that takes a string as an argument and returns the last character of the string. Then, write another function named isLastCharacterB that uses getLastCharacter and checks if the last character is 'B'.

function getLastCharacter (stringValue) {
    let result = stringValue.charAt(stringValue.length -1);
    return result;
}

function isLastCharacterB () {
    if (getLastCharacter === 'B') {
        return `Last Character is B`;
    } else {
        return `Last Character is not a B`
    }
}

getLastCharacter('shubham');
console.log(isLastCharacterB());
console.log('16 >-------------------');