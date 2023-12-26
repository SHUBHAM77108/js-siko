// class config {
//     static dbUser = 'username';
//     static dbPassword = 'secret';
//     static apiToken = 'abcd';
// }

// console.log(config.apiToken);




class user {
    // static id = 1;

    static cache = {
        1 : "Some Value"
    }

    constructor (name, age, income){
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = user.id++
    }

    // checkCache(){

    // }

    static {
        console.log('Initialized')
    }
    static hasInCase(){
        console.log(user.cache)
    }

    // static compareByAge(user1, user2){
    //     return user1.age - user2.age;
    // }
    // static compareByIncome(user1, user2){
    //     return user1.income - user2.income
    // }
}

// user.hasInCase()

// const user1 = new user('Shubham',22, 5000);
user.hasInCase();
user.hasInCase();
// const user2 = new user('Vishal',24, 1000);
// const user3 = new user('Abhi',20, 7000);

// // console.log(user1, user2, user3);

// // const users = [user1,user2,user3];
// // users.sort(user.compareByIncome);

// console.log(user1, user2, user3 );