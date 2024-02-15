// This keyword is dynamic it's change situation to situation

// situation 1

// console.log(this); // -> in browser window is a globle object 

// situation 2

// function log(){ 
//     console.log(this); // -> window
// }
// log()

// situation 3

// const user = {
//     fname: "shubam",
//     lname: "Vish",
//     printFullName: function (){
//         console.log(this); // -> user same object
//     },
// };

// user.printFullName()

// situation 4

// constructor function

// function user(fname, lname){
//     console.log(this); // -> user same object
// }

// const coders = new user("shubhsm","Vish")

// situation 5

const user = {
    fname: "shubam",
    lname: "Vish",
    printFullName: function (){
        console.log(this); // -> window
    },
};

const newPrintFullName = user.printFullName; // copy in new vraible
newPrintFullName(); // and call as normal function 

// challange

const user1 = {
    name: "shubham vish",
    printName: function () {
        console.log('upper', this); // user1 same object

        const printAgain = function(){
            console.log(this) // window
        };
        printAgain();
    }
};
user1.printName();

// situation 6 arrow function 
// in arrow function does not have it's own this keyword it will be
// take from outer enviroment

const user3 = {
    name: "shubham vish",
    printName: function () {
        console.log('upper', this); // user1 same object

        const printAgain = () => {
            console.log(this) // this arrow fun will take from outer env -> user1
        };
        printAgain();
    }
};
user1.printName();