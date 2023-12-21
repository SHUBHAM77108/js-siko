// function BackAccount (CustomerName, balance = 0){
//     this.CustomerName = CustomerName;
//     this.accountNumber = Date.now();
//     this.balance = balance
    
//     this.deposit = function (amount){
//         this.balance = this.balance + amount
//     }
    
//     this.withdraw = (debitamount) => {
//         this.balance -= debitamount
//     }
// }

// // const Shubham = new BackAccount ("Shubham", 1000)
// // const Vis = new BackAccount ("Vish")

// // console.log(Shubham,Vis)

function BackAccount(CustomerName, balance = 0){
    this.CustomerName = CustomerName
    this.AccountNumber = Date.now()
    this.balance = balance
}

const shuAccount = new BackAccount("Shubham.V")
const vishAccount = new BackAccount("Vis",600)

BackAccount.prototype.Deposit = function (amount){
    this.balance += amount
}

BackAccount.prototype.Withdraw = function (amount){
    this.balance -= amount
}

vishAccount.Deposit(6000)
vishAccount.Withdraw(700)

console.log(vishAccount)