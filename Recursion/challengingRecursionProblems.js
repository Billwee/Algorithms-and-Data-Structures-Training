//////////////////////////////////
/////   Problem 1
//////////////////////////////////

// write a recursive fuinction called reverse which accepts a string and returns
// a new string in reverse.

function reverse(str) {
  let arr = str;
  let newArr;

  newArr = arr[arr.length - 1];

  if (arr.length === 1) return newArr;

  newArr = newArr.concat(reverse(arr.slice(0, arr.length - 1)));

  return newArr;
}

console.log(reverse("awesome"));

//////////////////////////////////
/////   Instructor Solution 1
//////////////////////////////////

function reverse2(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

//////////////////////////////////
/////   Problem 2
//////////////////////////////////

//////////////////////////////////
/////   Instructor Solution 2
//////////////////////////////////

//////////////////////////////////
/////   Problem 3
//////////////////////////////////

//////////////////////////////////
/////   Instructor Solution 3
//////////////////////////////////

//////////////////////////////////
/////   Problem 4
//////////////////////////////////

//////////////////////////////////
/////   Instructor Solution 4
//////////////////////////////////

//////////////////////////////////
/////   Problem 5
//////////////////////////////////

//////////////////////////////////
/////   Instructor Solution 5
//////////////////////////////////
