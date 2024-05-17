const arr = [0, 1, 2, 3, 4, 5, 6];

for (let key = 1; key < 5; key++) {
  //   console.log("indexes", key);
}

// while loop
let key = 0;
while (key < arr.length) {
  //   console.log("Statement running" + " " + key);
  key++;
}

const person = {
  name: "John",
  age: 20,
  address: "UK",
};

for (let key in person) {
  //   console.log(`${key}: ${person[key]}`);
}

for (value of arr) {
  //   console.log(value);
}

// Funtion to print stars
function showStars(num) {
  for (let row = 0; row < num; row++) {
    let str = "";
    for (let col = 0; col < num - row; col++) {
      str += "*";
    }
    console.log(str);
  }
}

showStars(5);

// Prime number checker
const isPrime = (num) => {
  if (num < 2) {
    return error + ": " + num;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

const showPrimeNumbersLimit = (limit) => {
  let prime = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i) === true) {
      prime.push(i);
    }
  }
  return prime;
};

const limit = showPrimeNumbersLimit(20);
// console.log(limit);
