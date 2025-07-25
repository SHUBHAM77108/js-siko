// sum
let n = Number(prompt("Please Enter an a number should have to add"));

if (isNaN(n)) {
  console("Please Enter a numbers");
} else {
  if (n > 0) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    console.log(`sum of ${n} number ${sum}`);
  } else {
    console.log("Please Enter a +ve numbers");
  }
}

// factoril
let pr = prompt("Please Enter an a number");

if (pr == null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);
  if (isNaN(n)) {
    console.log("Please Enter a numbers");
  } else {
    if (n > 0) {
      var sum = 1;
      for (let i = 1; i <= n; i++) {
        sum = sum * i;
      }
      console.log(`sum of ${n} number ${sum}`);
    } else {
      console.log("Please Enter a +vn numbers");
    }
  }
}

// factor
let pr2 = prompt("Please Enter an a number");

if (pr2 == null) {
  console.log("Cancelled");
} else {
  let n = Number(pr2);
  if (isNaN(n)) {
    console.log("Please Enter a numbers");
  } else {
    if (n > 0) {
      for (let i = 1; i < Math.floor(n / 2); i++)
        if (n % i === 0) {
          console.log(i);
        }
      console.log(n);
    } else {
      console.log("Please Enter a +vn numbers");
    }
  }
}

// prime numbers

let pr3 = prompt("Please Enter an a number");

if (pr3 == null) {
  console.log("Cancelled");
} else {
  let n = Number(pr3);
  if (isNaN(n)) {
    console.log("Please Enter a numbers");
  } else {
    if (n > 0) {
      let isprime = true;
      for (let i = 2; i < Math.floor(n / 2); i++) {
        if (n % i === 0) {
          isprime = false;
          break;
        }
      }
      console.log(isprime);
    } else {
      console.log("Please Enter a +vn numbers");
    }
  }
}

// using function solve prime numbers aur not

function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true; //because 2 is only even number is a prime number
  if (n % 2 == 0) return false;
  //if any number will not divide from 2 till his squre root if it will not divide any numbers between 2 to his squre root it can't be divide
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}

// sum using while loop

let pr4 = prompt("Please Enter an a number");

if (pr4 == null) {
  console.log("Cancelled");
} else {
  let n = Number(pr4);
  if (isNaN(n)) {
    console.log("Please Enter a numbers");
  } else {
    if (n > 0) {
      var sum = 0;
      while (n > 0) {
        var rem = n % 10; //this will be give the last number from n e.g- 1234%10 -> 4 => 123%10 -> 3 .etc
        sum = sum + rem; //0 + 4 => 4 + 3 => 7 + 2 => 9 + 1 =>.ect
        n = Math.floor(n / 10); //this will be removeing the number from n e.g- 1234/10 -> 123 => 123/10 -> 12 =>.etc
      }
    } else {
      console.log("Please Enter a +vn numbers");
    }
  }
}

// reverse of the number

let pr5 = prompt("Please Enter an a number");

if (pr5 == null) {
  console.log("Cancelled");
} else {
  let n = Number(pr5);
  if (isNaN(n)) {
    console.log("Please Enter a numbers");
  } else {
    if (n > 0) {
      var rem = 0;
      while (n > 0) {
        var rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
      }
    } else {
      console.log("Please Enter a +vn numbers");
    }
  }
}

// strong numbers is a positive integer where the sum of the factorial of its digits equal the numbers itself e.g - 145 is a strong number because 1! + 4! + 5! = 1 + 24 + 120 = 145

let pr5 = prompt("Please Enter an a number");

if (pr5 == null) {
  console.log("Cancelled");
} else {
  let n = Number(pr5);
  if (isNaN(n)) {
    console.log("Please Enter a numbers");
  } else {
    if (n > 0) {
      var sum = 0;
      var copy = n;
      while (n > 0) {
        var rem = n % 10;
        var fact = 1;
        for (var i = 1; i <= rem; i++) {
          fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10);
      }
      if (copy === sum) {
        console.log("strong number");
      } else {
        console.log("not strong number");
      }
    } else {
      console.log("Please Enter a +vn numbers");
    }
  }
}
