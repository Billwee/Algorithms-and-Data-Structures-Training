// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values 
// in the array. There can be negative numbers in the array, but it will always be sorted.

// NOTE: This only works on sorted arrays

/////////////////////////////////////
//         My solution
/////////////////////////////////////

function countUniqueValues(arr) {
  //Two pointers in the array. One moves on each iteration depending on the conditional
  let firstPointer = 0;
  let secondPointer = 1;

  // The loop stops when the second pointer reaches the end of the array
  while (secondPointer < arr.length) {
    // If both pointer values match the second pointer moves
    if (arr[firstPointer] == arr[secondPointer]) {
      secondPointer++;
      // If the second pointer moves to a value that is greater than the first pointer. The 
      // first pointer moves up and the value of the array at that new index is changed to 
      // the second pointer's value.
    } else if (arr[firstPointer] < arr[secondPointer]) {
      firstPointer++;
      arr[firstPointer] = arr[secondPointer];
    }
  }

  // Returns a spliced out array using the first pointer as the value of how many to return.
  // I guess since only the number of unique values is needed, "firstPointer + 1" can also just be returned.
  console.log(arr.splice(0, firstPointer + 1).length);
  console.log(firstPointer + 1);
  return arr.splice(0, firstPointer + 1).length;

}

countUniqueValues([-3, -3, -1, 0, 1, 2, 2, 3, 4, 4, 4, 4]);



/////////////////////////////////
//    Instructor solution
/////////////////////////////////

function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}
countUniqueValues2([1, 2, 2, 5, 7, 7, 99])
