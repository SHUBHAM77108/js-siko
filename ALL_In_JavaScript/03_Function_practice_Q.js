// JavaScript Function Practice Questions 


// console.log('1 >-------------------');

// 1 >---Question:
// Write a function named isEven that takes a number as an argument and returns true if the number is even, and false if it is odd. 


// function isEven (number) {
//     if (number % 2 !== 0) {
//         return `${number} is an even number.`;
//     } else {
//         return `is an odd ${number}`;
//     }
// }

// console.log(isEven(5));

// console.log('2 >-------------------');

// 2 >---Question:
// Write a function named getGreeting that takes a string (name) as an argument and returns a greeting message like "Hello, [name]!".

// function getGreeting (greeting){
//     console.log(`Hello, ${greeting}`);
// }

// getGreeting('Shubham');

// console.log('3 >-------------------');

// 3 >---Question:
// Write a function named isAdult that takes an age as an argument and returns true if the age is 18 or above, and false if it is less than 18.

// function isAdult (name,adult) {
//     // if (adult >= 16) {
//     //     return `${name}, is an a adult person.`
//     // } else {
//     //     return `${name}, is not an a adult person.`
//     // }
// console.log(adult >= 16 ? `${name}, is an a adult person.` : `${name}, is not an a adult person.`);

// }

// isAdult('shubham', 18);
// isAdult('abhi', 15);

// console.log('4 >-------------------');

// 4 >---Question:
// Write a function named add that takes two numbers as arguments and returns their sum. Then, write another function named calculate that calls the add function with two numbers and returns the result.

// function AddTakes (num1,num2){
//     return  num1 + num2;
// }

// function calculateSumofnumber () {
//     return AddTakes(5,10); // Example of calling AddTakes function
// }

// console.log(calculateSumofnumber());

// console.log('5 >-------------------');

// 5 >---Question:
// Write a function named isPositive that takes a number as an argument and returns true if the number is positive, false if it is negative, and null if it is zero.


// i use a truthy and false value 
// function isPositiveNumber (num) {
//     // if (num > 0) {
//     //     console.log(`${num} is a true`);
//     // } else if (num < 0) {
//     //     console.log(`${num} is a false value`);
//     // } else {
//     //     return null;
//     // }

//     // same output using trenary operator
//     num > 0 ? console.log(`${num} is a true`) : console.log(`${num} is a false`)
// }
// isPositiveNumber(1);


// console.log('6 >-------------------');

// 6 >---Question:
// Write a function named getLength that takes a string as an argument and returns the length of the string. Then, write another function named compareLengths that takes two strings, calls getLength for both, and returns the longer string.

// function getLength (str) {
//     return str.length;
// }

// function compareLengths (str1, str2) {
//     if (getLength(str1) > getLength(str2)) {
//         return str1;
//     } else {
//         return str2;
//     }
// }
// console.log(compareLengths('shubham','abhishekh'));

// console.log('7 >-------------------');

// 7 >---Question
// Write a function named isEqual that takes two arguments and returns true if they are equal and false if they are not.

// function isEqual (value1, value2) {
//     return value1 === value2 ? `Both ${value1}, ${value2} are equal: true` : `Both ${value1}, ${value2} are not equal value: false`;
// }

// console.log(isEqual(5,'5'));
// console.log(isEqual(5,"'shubham'"));


// console.log('8 >-------------------');

// 8 >---Questions
// Write a function named getFirstCharacter that takes a string as an argument and returns the first character of the string. Then, write another function named isFirstCharacterA that uses getFirstCharacter and checks if the first character is 'A'.

// function getFirstCharacter (string) {
//     return string.charAt(0);
// }

// function isFirstCharacterA (string2) {
//     return getFirstCharacter(string2) === 'A'
// }
// console.log(isFirstCharacterA('Abhi'))

// console.log('9 >-------------------');

// 9 >---Questions
// Write a function named multiply that takes two numbers as arguments and returns their product. Then, write another function named square that uses multiply to return the square of a number.

// function getMultiply (num1, num2) {
//     return num1 * num2;
// }

// function getsquare (num) {
//     return getMultiply (num, num);
// }
// console.log(getsquare(6,4));

// console.log('10 >-------------------');

// 10 >---Questions
// Write a function named isLongerThan that takes two strings as arguments and returns true if the first string is longer than the second, and false otherwise.

// function isLongerThanTwo (string1, string2) {
//     let stringcount1 = 0;
//     for (let i = 0; i < string1.length; i++) {
//         stringcount1 += 1;
//     }

//     let stringcount2 = 0;
//     for (let i = 0; i < string2.length; i++) {
//         stringcount2 += 1;
//     }
//     return stringcount1, stringcount2;
// }


// shortcut way 

// function isLongerThanTwo (str1, str2) {
//     return str1.length > str2.length;
// }
// console.log(isLongerThanTwo("shubham","abhishekh"));

// console.log('11 >-------------------');

// 11 >---Question
// Write a function named isUpperCase that takes a string as an argument and returns true if the string is in uppercase, and false otherwise.

// function isUpperCase (isUpperCaseletter) {
//    return isUpperCaseletter === isUpperCaseletter.toUpperCase() ? "The String is a UpperCase letter :True" : "The String is not a UpperCase letter :False";
// }

// console.log(isUpperCase('shubham')); //False
// console.log(isUpperCase('SHUBHAM')); //True

// console.log('12 >-------------------');

// 12 >---Question:
// Write a function named containsSubstring that takes two strings as arguments and returns true if the second string is a substring of the first, and false otherwise.

// function containsSubstring (string1, string2){
//     return string1.charAt(0) === string2.charAt(0) ? "The First charater of string one and two both are same: True" : "The First charater of string one and two both are not same: False";

//     // return string1.indexOf(string2) !== -1; // short way
// }

// console.log(containsSubstring('Summt', 'Summan'));
// console.log(containsSubstring('Summt', 'dumman'));

// console.log('13 >-------------------');

// 13 >---Question:
// Write a function named toUpperCaseString that takes a string as an argument and returns the string in uppercase.

// function toUpperCaseString2 (uppercase) {
//     return uppercase.toUpperCase();
// }
// console.log(toUpperCaseString2("amit")); // AMIT

// console.log('14 >-------------------');

// 14 >---Question
// Write a function named isDivisibleBy that takes two numbers as arguments and returns true if the first number is divisible by the second, and false otherwise.

// function isDivisibleBy (num1, num2) {
//  return num1 % num2 === 0 ? `${num1} is divisible by ${num2}` : `${num1} is not divisible by ${num2}`
// }

// console.log(isDivisibleBy(10, 2));
// console.log(isDivisibleBy(10, 3));


// console.log('15 >-------------------');

// 15 >---Question
// Write a function named getLastCharacter that takes a string as an argument and returns the last character of the string. Then, write another function named isLastCharacterB that uses getLastCharacter and checks if the last character is 'B'.

// function getLastCharacter (stringValue) {
//     return stringValue.charAt(stringValue.length -1);
// }

// function isLastCharacterB (stringValue) {
//     return getLastCharacter(stringValue) === 'B';
// }

// console.log(isLastCharacterB("SubhamB"));


// Here are more similar questions focusing on creating one function and using it in another:

// console.log('16 >-------------------');
// 16 >---Questions
// Write a function named getMiddleCharacter that takes a string as an argument and returns the middle character of the string. If the string has an even number of characters, return the two middle characters. Then, write another function named isMiddleCharacterVowel that uses getMiddleCharacter to check if the middle character(s) is a vowel (a, e, i, o, u).

function getMiddleCharacter (str) {
    let strcounter = 0;
    for (let i = 0; i < str.length; i++){
        strcounter += 1;
    }
    if (strcounter % 2 === 0) {
        strcounter = strcounter / 2;
        let firstChar = strcounter -1;
        let secondChar = strcounter;
        let result = str.charAt(firstChar) + str.charAt(secondChar);
        return result;
    } else {
        strcounter = (strcounter / 2) - 0.5;
        return str.charAt(strcounter);
    }
}

function isMiddleCharacterVowel (str) {
    let strvowelAurNot = '';
    for (let i = 0; i < getMiddleCharacter(str).length; i++) {

        if (getMiddleCharacter(str).charAt(i) === "a" || getMiddleCharacter(str).charAt(i) === "e" || getMiddleCharacter(str).charAt(i) === "i" || getMiddleCharacter(str).charAt(i) === "o" || getMiddleCharacter(str).charAt(i) === "u") {
            strvowelAurNot += `${getMiddleCharacter(str).charAt(i)} The middle character is a vowel\n`
        } else {
            strvowelAurNot += `${getMiddleCharacter(str).charAt(i)} The middle character is not a vowel\n`
        }
    }
    return strvowelAurNot;
} 

console.log(isMiddleCharacterVowel('hamivoishu'));

console.log('17 >-------------------');
// 17 >---Questions
// Write a function named getInitials that takes a full name (first and last name) as an argument and returns the initials (e.g., "John Doe" should return "JD"). Then, write another function named compareInitials that takes two full names, calls getInitials for both, and returns true if the initials are the same, and false otherwise.
function getInitials (firstName, lastName) {
    (firstName.charAt(0) , lastName.charAt(0));
    return; 
}
function compareInitials () {
    let firstName = getInitials(firstName);
    let lastName = getInitials(lastName);
    if (getInitials(firstName) === firstName.charAt(0) && getInitials(firstName) === lastName.charAt(0)) {
        return true;
    } else {
        return false;
    }
    compareInitials();
}
// console.log(compareInitials('shubham', 'vish'));

console.log('18 >-------------------');
// 18 >---Questions
// Write a function named reverseString that takes a string as an argument and returns the string in reverse order. Then, write another function named isPalindrome that uses reverseString to check if a string is a palindrome (a word that reads the same backward as forward).

function reverseString (revStr) {
    let countStr = '';
    for (let i = revStr.length; i > 0; i--) {
        countStr += revStr.charAt(i - 1);
    }
    return countStr;
}

function isPalindrome (revStr) {
    let isPalindromResult = "";
    let storeReverseString = reverseString(revStr);
    if (storeReverseString === revStr) {
        isPalindromResult += revStr;
    } else {
        return `${storeReverseString} is not a palindrome`;
    }
    return `${isPalindromResult} is palindrom`;
}

console.log(isPalindrome('racecar'));

console.log('19 >-------------------');
// 19 >---Questions
//Write a function named getDayOfWeek that takes a date string (e.g., "2023-08-15") as an argument and returns the day of the week (e.g., "Tuesday"). Then, write another function named isWeekend that uses getDayOfWeek to check if the day is Saturday or Sunday.

function getDayOfWeek(dateStr) {
   let date = new Date(dateStr); // converting string in a date in number
   let dateInNum = date.getDay(); // this is providing a num from 0 - 6
   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // for get a days for this array of index it's picking a days using dateInNum value from 0-6
   return days[dateInNum]; // geting index of days using value of dateInNum
}

function isWeekend (dateStr) {
    return getDayOfWeek(dateStr) === "Saturday" || getDayOfWeek(dateStr) === "Sunday" ? "True" : "False";
}
console.log(isWeekend("2024-09-03"));  // Output: "Sunday"

console.log('20 >-------------------');
// 20 >---Questions
// Write a function named formatPhoneNumber that takes a string of 10 digits and returns it formatted as "(xxx) xxx-xxxx". Then, write another function named isSameAreaCode that takes two phone numbers, uses formatPhoneNumber for both, and checks if they have the same area code (the first three digits).

function formatPhoneNumber (takePhoneNum) {
    let savePhoneNum = '';
    let secondtimeSavePhoneNum = '';
    for (let i = 0; i < takePhoneNum.length; i++) {
        if (i === 3) {
            savePhoneNum += `) ${takePhoneNum.charAt(i)}`;
        } else if (i === 6) {
             savePhoneNum += '-' + takePhoneNum.charAt(i);
        } else {
             savePhoneNum += takePhoneNum.charAt(i);
        }
    }
    return `(${savePhoneNum} > ${savePhoneNum.length}`;
}

function isSameAreaCode (phoneNumOne, phoneNumTwo) {
    let formattedPhoneNumOne = formatPhoneNumber(phoneNumOne); // using formatPhoneNumber function this way we can format the both number
    let formattedPhoneNumTwo = formatPhoneNumber(phoneNumTwo);

    // Extracting the area code of thre formatted phone number using slice methode
    let areaCodeOne = formattedPhoneNumOne.slice(1,4) // Firts 3 digits
    let areaCodeTwo = formattedPhoneNumTwo.slice(1,4) // Firts 3 digits

    // comparing the area code 

    if (areaCodeOne === areaCodeTwo) {
        return 'Both number have the same area code.'
    } else {
        return 'number have different area code.'
    }
}
console.log(isSameAreaCode('7710871353','8898544175'));
console.log(isSameAreaCode('7710871353','7710978920'));

console.log('21 >-------------------');
// 21 >---Questions
// Write a function named replaceVowels that takes a string as an argument and returns the string with all vowels replaced by a specific character (e.g., '*'). Then, write another function named obfuscateEmail that uses replaceVowels to obfuscate the email address by replacing the vowels in the username part of the email. a, e, i, o, u

function replaceVowels (vowelStr) {
    let spicalChar = '*';
    let replaceWithSpecialChar = '';
    for (let i = 0; i < vowelStr.length; i++) {
        if (vowelStr.charAt(i) === 'a' || vowelStr.charAt(i) === 'e' || vowelStr.charAt(i) === 'i' || vowelStr.charAt(i) === 'o' || vowelStr.charAt(i) === 'u') {
            replaceWithSpecialChar += spicalChar;
        } else {
            replaceWithSpecialChar += vowelStr.charAt(i);
        }
    }
    return replaceWithSpecialChar;
}

function obfuscateEmail (emailReplaceWithVowel) {
   let saveUserNamePart = '';
   let saveDomainPart = '';
    for (let i = 0; i < emailReplaceWithVowel.length; i++) {
    if (emailReplaceWithVowel.charAt(i) === '@'){
        saveUserNamePart = emailReplaceWithVowel.slice(0,i); // slice(0, 7) return karega "example", jo ki username part hai.

        saveDomainPart = emailReplaceWithVowel.slice(i); // Jab slice() method ko sirf ek argument (start index) diya jaata hai, jaise ki slice(i), toh yeh start index se lekar string ke end tak ka portion return karta hai.

        break; // No need to continue loop after '@' is found
    }
    }
    let saveEmailReplaceWithVowel = replaceVowels(saveUserNamePart) ;
    return saveEmailReplaceWithVowel + saveDomainPart;
}

console.log(obfuscateEmail('example@gmail.com'));

console.log('22 >-------------------');
// 22 >---Questions 
// Write a function named getLargestNumber that takes three numbers as arguments and returns the largest of the three. Then, write another function named isLargestNumberPrime that uses getLargestNumber and checks if the largest number is a prime number.

function getLargestNumber (num1,num2,num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

function isLargestNumberPrime(num11, num22, num33) {
    let largestNumber = getLargestNumber(num11,num22,num33)

    // 1 aur -negative number prime nahi hote
    if (largestNumber <= 1) {
        return `${largestNumber} is the largest number is not a prime number.`;
    }

    // 2 ek prime number hai, toh seedha true return kar do
    if (largestNumber === 2) {
        return `${largestNumber} is the largest number is a prime number.`;
    }

    // agar number 2 se divide ho jata hau toh prime nahi hai
    if (largestNumber % 2 === 0) {
        return `${largestNumber} is the largest number is not a prime number.`;
    }

    // cheak karte hain ki number kisi aur divisor se divide hota hai ya nai
    for (let i = 3; i <= Math.sqrt(largestNumber); i += 2) {
        if (largestNumber % i === 0) {
            return `${largestNumber} is the largest number is not a prime number.`;
        }
    }

    // agar koi divisor nahi mila, toh number prime hai
    return `${largestNumber} is the largest number is a prime number.`;
}

console.log(isLargestNumberPrime(5, 3, 4)); // Output: true
console.log(isLargestNumberPrime(8, 10, 12)); // Output: false

console.log('23 >-------------------');
// 23 >---Questions 
// Write a function named countVowels that takes a string as an argument and returns the number of vowels in the string. Then, write another function named hasMoreVowels that takes two strings, uses countVowels for both, and returns true if the first string has more vowels than the second, and false otherwise.

function countVowels (vowelStr) {
    let countVowels = 0;
    for (let i = 0; i < vowelStr.length; i++) {
        if (vowelStr.charAt(i) === 'a' || vowelStr.charAt(i) === 'e' || vowelStr.charAt(i) === 'i' || vowelStr.charAt(i) === 'o' || vowelStr.charAt(i) === 'u') { 
            countVowels += 1;
        }
    }
    return countVowels;
}

function hasMoreVowels (vowelStr1, vowelStr2) {
    let saveVowelStr1 = countVowels(vowelStr1);
    let saveVowelStr2 = countVowels(vowelStr2);

    if (saveVowelStr1 > saveVowelStr2) {
        return `${saveVowelStr1} is firts string has more vowel: true`;
    } else {
        return `${saveVowelStr2} is second string has more vowel: fales`;
    }
}

console.log(hasMoreVowels('exampleofvowels','example'));

console.log('24 >-------------------');
// 24 >---Questions
// Write a function named getInitial that takes a string (a name) as an argument and returns the first letter of the name. Then, write another function named areInitialsSame that takes two names, calls getInitial for both, and returns true if both names have the same initial letter, and false otherwise.

function getInitial (firstLetterOfName) {
    return firstLetterOfName.charAt(0);
}

function areInitialsSame (firstLetterOfName, secondLetterOfName) {
    let saveFirstLetterOfName = getInitial(firstLetterOfName);
    let saveSecondLetterOfName = getInitial(secondLetterOfName);

    if (saveFirstLetterOfName === saveSecondLetterOfName) {
        return true;
    } else {
        return false;
    }
}

console.log(areInitialsSame('shubham', 'sharma')); // Output: true
console.log(areInitialsSame('Rahul', 'Vikram'));  // Output: false

console.log('25 >-------------------');
// 25 >---Questions
// Write a function named calculateDiscount that takes a price and a discount percentage as arguments and returns the final price after applying the discount. Then, write another function named isDiscountBetter that takes two prices and their respective discounts, calls calculateDiscount for both, and returns true if the first discount is better (results in a lower final price) than the second, and false otherwise.

function calculateDiscount (price,discountPercentages) {
    let finalPriceOfPurchase = price - ((price * discountPercentages) / 100);
    return finalPriceOfPurchase;
}

function isDiscountBetter (price1,discount1,price2,discount2) {
    let saveTheFinalPriceOfPurchaseOne = calculateDiscount(price1,discount1);
    let saveTheFinalPriceOfPurchaseTwo = calculateDiscount(price2,discount2);
    
    if (saveTheFinalPriceOfPurchaseOne < saveTheFinalPriceOfPurchaseTwo) {
        return true;
    } else {
        return false;
    }
}

console.log(isDiscountBetter(200,10,200,15));