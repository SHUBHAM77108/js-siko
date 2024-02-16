// asynchronous javascript
/*
Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the Ul.
Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
*/

function hello(){
    console.log("One")
}
console.log("Two");

setTimeout(hello, 2000); // timeout; 2s 2000m

// we can also use arrow function 

setTimeout(()=> {
    console.log("Four")
}, 4000); // timeout

console.log("Five");