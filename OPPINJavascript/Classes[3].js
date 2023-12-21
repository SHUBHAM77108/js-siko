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