// JS has a built in sort method called .sort()

// ...but it doesn't alway work the way you'd expect.

// Example

// console.log(["Kamberos", "Bill", "Algorithms", "Data", "Javascript"].sort());
// returns [ 'Algorithms', 'Bill', 'Data', 'Javascript', 'Kamberos' ]

// console.log(["Kamberos", "bill", "Algorithms", "Data", "Javascript"].sort());
// returns [ 'Algorithms', 'Data', 'Javascript', 'Kamberos', 'bill' ]

// console.log([1, 6, 3, 4, 7, 9].sort());
// returns [ 1, 3, 4, 6, 7, 9 ]

// console.log([33, 1, 16, 4, 9, 74].sort());
// returns [ 1, 16, 33, 4, 74, 9 ]

// This is due to the fact that JS's built in sort() is sorted by unicode value.
// Each element of the array is converted to a string and it's first character
// unicode value is waht it's sorted by.

// This can be fixed by adding a comparator function to the sort method
// This function looks at pairs of elements (a and b) and sorts them based
// on the return value.
// - returns a negative number, a should come beofre b
// - returns a positive number, b should come before a
// - returns 0, a and b are the same

// Example

// ascending order
function numberCompare(num1, num2) {
  return num1 - num2;
}

// decending order
function numberCompare2(num1, num2) {
  return num2 - num1;
}
// console.log([33, 1, 16, 4, 9, 74].sort(numberCompare));
// returns [ 1, 4, 9, 16, 33, 74 ]

// console.log([33, 1, 16, 4, 9, 74].sort(numberCompare2));
// returns [ 74, 33, 16, 9, 4, 1 ]

// You can also sort by string length
function compareLen(str1, str2) {
  return str1.length - str2.length;
}

// console.log(["Kamberos", "Bill", "Algorithms", "Data Structures", "Javascript"].sort(compareLen));
// returns [ 'Bill', 'Kamberos', 'Algorithms', 'Javascript', 'Data Structures' ]
