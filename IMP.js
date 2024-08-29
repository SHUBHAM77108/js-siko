// https://www.youtube.com/watch?v=EerdGm-ehJQ&t=9371s 
// video link for proper understand the top time stamp is 3:19:43 
// Truthy*** and Falsy Values

// 1)
    if (5) {
        console.log('truthy') // truthy
    }

    // the number 5 behaves just like true 
    // and if we change the number 5 to number 
    // 0 the output is false because the number 0 is behaves just false

    // Falsy Values list 
    // -false  -0  -''  -NaN  -undefined  -null
    // Any value not on this list is truthy values

    const cartQuantity = 5;

    if (cartQuantity) {
        console.log('Cart has products');
    }
    // in this code as you can see instead of doing comparisons 
    // we can use truthy and falsey values as shortcut

    // truthy and falsey is also work with logical operators
    // for e.g
    console.log(!0); // true

    // text divided by the num is obviously this not valid maths
    console.log('text' / 5); // NaN

    // undefined represents that this variable doesn't have a values
    let variable1;
    console.log(variable1); // undefined

    // *** ShortCuts for if-statements 
    // - Ternary Operator ? :
    // - Guard Operator &&
    // - Default Operator ||

    //1 ----> Ternary Operator ? :

    // Ternary Operator is similar to if else statement
    // the firt value is like the condition 
    // and after the ? marks if aue after the : else 
    true ? 'truthy' : 'falsy';

    // the advantages of Turner operator is over an if statement
    // is that we can have a tary operator in a variable
    // so at the front we can do const result 
    const result = true ? 'truthy' : 'falsy'
    console.log(result); // truethy => value change to 0 the output is //falsy

    //2 ----> Guard Operator &&

    // AND operator && 
    // values1 && values2
    // -checks if 2 sides are both truthy 

    // AND operator has a special feature let's say we have an and 
    // operator and the left side is false in this situation we already
    // know it's impossible for both sides to be true so we don't even
    // need to check the right side of the AND operator 
    false && console.log('hello');
    // we can save the guard operator in a variable and run it
    const message = false && 'hello';
    console.log(message); // false => if we change the value form false to 5 the output is // hello

    //3 ----> Default Operator ||
    // is similar to the Guard operator but uses the Aur ||
    // let's imagine we have an or operator and the left side is 
    // true in this situation we already know the result is true 
    // because the left side is already truthy we don't even need to 
    // check the right side so the operator also stops early 

    const currency = 'USD' || 'IND';
    console.log(currency); // USD ---> if we changes the value from USD to undefined // IND