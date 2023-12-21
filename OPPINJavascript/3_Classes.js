// What is classes in OPPS?

// A class is a type of object template. The class statement initiates a 
// JavaScript class. 
// Properties and methods are assigned in the constructor()method. 
// The constructor() method is called each time a class object is 
// initialized.

// => In classes hoisting will not work 

// Youtube Video 
// https://www.youtube.com/watch?v=A2Jd04MIwjM&list=PLXQpH_kZIxTWQfh_krE4sI_8etq5rH_z6&index=4

// there are two type of classes declarations
// 1 
const BackAccount1 = class{}  

// 2
class BackAccount{
    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        this.balance -= amount
    }
}


const ShubhamAccount = new BackAccount("Shubham",1000)
ShubhamAccount.deposit(4000)
ShubhamAccount.withdraw(300)
console.log(ShubhamAccount)



// Example of Hoisting 

hello(); // call function first with function decleration

function hello(){
    console.log("Hello Shubham")
}

// hello(); call this function using Hoisting in line number 43

// there are of two type of function creating method in javascript

// 1 function experation 

const hello = function(){
    console.log("Hello Shubham")
}

// function decleration
function hello(){}