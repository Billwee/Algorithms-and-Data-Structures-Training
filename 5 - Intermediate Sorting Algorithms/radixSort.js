// Radix Sort has a different concept of sorting. It doesn't work by making comparions between two numbers.
// it exploits the fact that information about the size of the number is encoded in the number
// of digits. More digits... bigger number.

// The elements are sorted at first by the value of their last digits.
// 239, 49, 23219, 339, 19, 9 - for example, all have the same last digit.
// The numbers are then put back into a list starting from the left and
// ordered by their last digit value.
// example: [408, 233, 4255, 6438, 11, 2, 444, 9] would sort into this list
//          [11, 2, 233, 444, 4255, 6438, 408, 9]
// Then the numbers are grouped by their second to last digit. (single digit numbers
// would be grouped in the zero group) and put back into the list in order
//          [2, 9, 408, 11, 233, 6438, 444, 4255]
// .. and now third to last digit
//          [2, 9, 11, 233, 4255, 408, 6438, 444]
// .... fourth
//          [2, 9, 11, 233, 408, 444, 4255, 6438]
// done..

// The amount of times needed to to group and redistribute the numbers is equal to the
// largest amount of digits in a number contained in the list.

// A couple of helper functions are needed to implement this algorithm

//////////////////////
/// Helper functions
/////////////////////

// We need a function to return the digit value in a given number and place.

function getDigit(num, place) {
  // My idea was convert to string then charAt and return as integer
  let value = num.toString().charAt(num.toString().length - place - 1);
  value = parseInt(value) || 0;
  return value;

  // Way I found online usings maths
  // return Math.floor((num / Math.pow(10, place - 1)) % 10);
}

// console.log(getDigit(12345, 0));
// console.log(getDigit(12345, 3));
// console.log(getDigit(12345, 4));
// console.log(getDigit(12345, 5));

// Now we need a function hat returns the number of digits in a number

function digitCount(num) {
  // My way converting to string
  return num.toString().length;

  // Instructors way with maths
  //   if (num === 0) return 1;
  //   return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(12345));

// Now we need a function that takes in an array and returns the largests number of digits in it.

function mostDigits(arr) {
  let max = -Infinity;
  for (num of arr) {
    if (digitCount(num) > max) max = digitCount(num);
  }
  return max;
}

console.log(mostDigits([2, 9, 11, 233, 408, 444, 4255, 643822]));
