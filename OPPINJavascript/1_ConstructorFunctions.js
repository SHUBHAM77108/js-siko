// var Product2 = {
//   shoes: 100,
//   statetax: 1.2,
//   totalPrice: function (){
//     var calculate = this.shoes * this.statetax
//     console.log(calculate)
//   }
// }
// Product2.totalPrice()


function BackAccount (CustomerName, balance = 0){
    this.CustomerName = CustomerName;
    this.accountNumber = Date.now();
    this.balance = balance
    
    this.deposit = function (amount){
        this.balance = this.balance + amount
    }
    
    this.withdraw = (debitamount) => {
        this.balance -= debitamount
    }
}

// const Shubham = new BackAccount ("Shubham", 1000)
// const Vis = new BackAccount ("Vish")

// Shubham.deposit(2000)
// Vis.deposit(1199)
// Shubham.debit(1500)
// console.log(Shubham,Vis)






// ===========================================

const accounts = [];

const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');
const debitForm = document.querySelector('#debitForm');
const debitamount = document.querySelector('#debitamount');

accountForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    const account = new BackAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
})

depositForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const account = accounts.find((account) => account.accountNumber === +accountNumber.value);
    account.deposit(+amount.value);
    console.log(accounts);
})

debitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find((account) => account.accountNumber === +accountNumber.value)
    account.withdraw(+debitamount.value);
    console.log(accounts)
})