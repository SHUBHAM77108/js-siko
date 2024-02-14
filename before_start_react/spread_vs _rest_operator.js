//-Spread:-unpack-elements.-[]{}
//-Rest:-packs-elements


// clone-/- copy

// const numbers = [1,2,3]; //--- packs array
// const newNumbers = [...numbers]; // --- unpacks
// console.log(newNumbers);


// Merge

// const OldNumbers = [1,2,3];
// const newNumbers = [4,5,6];
// console.log(...OldNumbers,...newNumbers);
// console.log([...OldNumbers,...newNumbers]); // ---inside array 

// compose

// const OldNumbers = [1,2,3];
// const newNumbers = [4,5,6];
// console.log([100,...OldNumbers,...newNumbers,200]); 



// in strings 

// const name = 'shubham';
// console.log([...name]);


//objects
//clone(shallow)

// const order = {
//     id:1,
//     date:'29/08/2023',
//     customerName:'Shubham',
//     items:['1','2','3']
// }

// const newOrder = {
//     ...order,
// };

// order.items.push('4');

// console.log(newOrder);



// merge 2 objects

// const user = {
//     name: 'shubhma',
//     city: 'mumbai'
// }

// const address = {
//     street: 'main street'
// }

// const newUser = {
//     ...user,
//     ...address,
// };

// console.log(newUser);


// Rest ... use for pack 

// function sum(number1,number2){  // --- normal function 
//     return number1 + number2;
// }

// console.log(sum(5,6));

function sum (...numbers){
    console.log(numbers);
    let result = 0;
    for(let num of numbers){
        result += num;
    }
    return result;
}

console.log(sum(5,9));