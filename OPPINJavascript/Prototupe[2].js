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

// console.log(Shubham,Vis)