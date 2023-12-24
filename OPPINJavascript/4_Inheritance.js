
const BackAccount = class{
    customerName; 
    Accountnumber;
    balance = 0;

    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.Accountnumber = Date.now()
        this.balance = balance
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        this.balance -= amount
    }
}

// Inside this class constructor not using this because syntax is defferent 
// instance using this we use extends and className
// eg:- extends BankAccount line number 25 => BackAccount all property 
// are available in CurrentAccount
const BackAccount = class{
    customerName; 
    Accountnumber;
    balance = 0;

    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.Accountnumber = Date.now()
        this.balance = balance
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        this.balance -= amount
    }
}


class SavingAccount extends BackAccount{
    transactionLimit = 10000;

    constructor(customerName, balance = 0){
        super(customerName,balance)
    }

    takingPersonalLoan(amount){
        console.log('Taking Personal loan: ' + amount)
    }
}

const ShubhamAccount = new SavingAccount("Shubham",1000)
ShubhamAccount.deposit(4000)
ShubhamAccount.withdraw(300)
console.log(ShubhamAccount)

// =>=>=>=>=>  using constructor function <=<=<=<=<=<=

// function BankAccount(CustomerName, balance = 0){
//     this.CustomerName = CustomerName;
//     this.accountNumber = Date.now();
//     this.balance = balance
// }

// BankAccount.prototype.deposit = function(amount){
//     this.balance += amount
// }

// BankAccount.prototype.withdraw = function(amount){
//     this.balance -= amount
// }


// // =============================================================
// // =>=>=>=>=>  do not repeat yourself <=<=<=<=<=<=
// // =============================================================
// // function CurrentAccount(CustomerName, balance = 0){
// //     this.CustomerName = CustomerName;
// //     this.accountNumber = Date.now();
// //     this.balance = balance
// //     this.transactionLimit = 50000
// // }

// // CurrentAccount.prototype.takingBusinessLoan = function(amount){
// //     console.log('Taking Business loan: ' + amount)
// // }

// // CurrentAccount.prototype.deposit = function(amount){
// //     this.balance += amount
// // }

// // CurrentAccount.prototype.withdraw = function (amount){
// //     this.balance -= amount
// // }

// // function SavingAccount(CustomerName, balance = 0){
// //     this.CustomerName = CustomerName;
// //     this.accountNumber = Date.now();
// //     this.balance = balance
// //     this.transactionLimit = 10000
// // }

// // SavingAccount.prototype.takingPersonalLoan = function(amount){
// //     console.log('Taking Personal loan: ' + amount)
// // }

// // SavingAccount.prototype.deposit = function(amount){
// //     this.balance += amount
// // }

// // SavingAccount.prototype.withdraw = function (amount){
// //     this.balance -= amount
// // }

//================================================================

// // this is a example of do not repeat yourself
// function CurrentAccount(CustomerName, balance = 0){
// //(constructor linking) link parent to child constructor (BackAccount)
//     BankAccount.call(this, CustomerName, balance);//thisIsconstructorLinking
//     this.transactionLimit = 50000
// }
// CurrentAccount.prototype.takingBusinessLoan = function(amount){
//     console.log('Taking Business loan: ' + amount)
// }

// //this is special method in jS to link parent  prototype to child prototype
// CurrentAccount.prototype = Object.create(BankAccount.prototype)


// function SavingAccount(CustomerName, balance = 0){
//     BankAccount.call(this, CustomerName, balance);
//     this.transactionLimit = 10000
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype)

// SavingAccount.prototype.takingPersonalLoan = function(amount){
//     console.log('Taking Personal loan: ' + amount)
// }

// const ShubhamAccount = new SavingAccount("Shubham",1000)
// ShubhamAccount.deposit(4000)
// ShubhamAccount.withdraw(300)
// ShubhamAccount.takingPersonalLoan(4000)
// // console.log(ShubhamAccount)

// // const ShubhamAccount = new BackAccount("Shubham",1000)
// // ShubhamAccount.deposit(4000)
// // ShubhamAccount.withdraw(300)
// // console.log(ShubhamAccount)