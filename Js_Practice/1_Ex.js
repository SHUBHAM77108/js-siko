/* Exercise 1:
----------------
Write a JavaScript program to check two
numbers and return true if one of the number
is 100 or if the sum of the two numbers is
100
*/

const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(100,0))
console.log(isEqualTo100(0,100))

console.log(isEqualTo100(10,0))
console.log(isEqualTo100(0,10))

console.log(isEqualTo100(10,90))
console.log(isEqualTo100(91,10))

/* Exercise 2:
Write a JavaScript program to get the
extension of a filename.
*/