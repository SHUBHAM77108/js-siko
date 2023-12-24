// Encapsulation is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details of an object and exposing only the necessary information to the outside world. Encapsulation helps in maintaining the integrity of data and ensures that it is not accessed or modified inappropriately.

// e.g :-

//parent class line no 6
const BankAccount = class{
    customerName; 
    Accountnumber;
    #balance = 0; // privet property like this

    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.Accountnumber = Date.now()
        this.#balance = balance
    }

    deposit(amount){
        this.#balance += amount
    }

    withdraw(amount){
        this.#balance -= amount
    }

    
    // This our gets and sets 
    set Balance(amount){
        if(isNaN(amount)){
            throw new Error('Amount is not a valid input')
        };
        this.#balance = amount;
    }

    get Balance(){
        return this.#balance
    }
}

// This sub/child class of BankAccount in line no 27
class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName, balance = 0){
        super(customerName,balance) // super method call firt super coustructor this 
                            //code super constructor is line number 7
    }

    #calculateInterest(amount){ // privet methods
        console.log('Calculating interest')
    }

    takeBusinessLoan(amount){
        // Logic 
        this.#calculateInterest(amount)
    console.log('Taking Business loan: ' + amount)
}
}

const shubham = new CurrentAccount("shubham", 2000)
// shubham.balance = 5000 // here inside part change form out side that way we use encapsulation for ensures that it is not accessed or modified 
shubham.takeBusinessLoan(400) // /
console.log(shubham)