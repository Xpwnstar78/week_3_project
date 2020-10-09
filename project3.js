// Create a function that takes numbers 1 - 10 and console logs them.Use a for loop.
function tiger() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
tiger();
// Using a while loop, return an array that contains all odd numbers between 3 and 103
let arr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, ];

let odds = arr.filter(n => n % 2);

console.log(odds);
// arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop.
function arraySum() {
  return Array.from(arguments).reduce((sum, value) => {
    if (Array.isArray(value)) {
      sum += arraySum.apply(this, value)
    } else {
      sum += Number(value)
    }

    return sum
  }, 0)
}

var sum = arraySum(10, 20, 30, 40, 50, 60);

console.log(sum);
// Use a loop to display the numbers 9 to 0 in descending order.
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
// Write a function computing the factorial of n
function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
let n = 4;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);
// Write a function using a for loop that returns the sum of all numbers from 1 to n.
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));
// Using any loop, Given a string change t = the every second letter to an uppercase ‘Z’.Assume there are no spaces.

// Let string = “donuts”

// Expected output => dZnZtZ
const bigZ = (string) => string .split("") .map((character, index, array) => (index % 2 === 0 ? character : "Z")) .join("");
console.log(bigZ("donuts"));