//////////////////////////////////
/////   Problem 1
//////////////////////////////////

// Write a function called power which accepts a base and an exponent. The function should
// return the power of the base to the exponent. This function should mimic the functionality
// of Math.pow() - don't worry about negative bases and exponents.

function power(base, exponent) {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
}

// console.log(power(2, 0));
// console.log(power(2, 2));
// console.log(power(2, 4));

//////////////////////////////////
/////   Instructor Solution 1
//////////////////////////////////

//////////////////////////////////
/////   Problem 2
//////////////////////////////////

// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it.

function factorial(num) {
  if (num === 0) return 1;

  return num * factorial(num - 1);
}

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(7));

//////////////////////////////////
/////   Instructor Solution 2
//////////////////////////////////

//////////////////////////////////
/////   Problem 3
//////////////////////////////////

// Write a function called productOfArray which takes in an array of numbers and returns
// the product of them all.

function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3]));
// console.log(productOfArray([1, 2, 3, 10]));

//////////////////////////////////
/////   Instructor Solution 3
//////////////////////////////////

//////////////////////////////////
/////   Problem 4
//////////////////////////////////

// Write a function called recursiveRange which accepts a number and adds up all the numbers
// from 0 to the number passed to the function

function recursiveRange(num) {
  if (num === 1) return 1;

  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(6));
// console.log(recursiveRange(10));

//////////////////////////////////
/////   Instructor Solution 4
//////////////////////////////////

//////////////////////////////////
/////   Problem 5
//////////////////////////////////

// Write a recursive function called fib which accepts a number and returns the nth number
// in the fibonacci sequence. Recall the the Fibonacci sequence is the sequence of whole
// numbers which starts with 1 and 1, and where every number following thereafter is equal
// to the sum of the two previous numbers.

// Could not figure this one out...thought it needed a helper function but I was sooooo wrong.

// function fib(idx) {
//   var num1 = 1;
//   let num2 = 1;
//   let counter = 1;

//   function sequence(first, second) {
//     console.log(first, second);
//     let next = first + second;
//     if (counter === idx) return next;
//     counter++;

//     return sequence(second, next);
//   }

//   sequence(num1, num2);
// }

// console.log(fib(6));

//////////////////////////////////
/////   Instructor Solution 5
//////////////////////////////////

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));
