// Intro to binary search

// Only works on sorted arrays. Alphabetical or numerical.

// It works by eliminating half of the array to search through on each interation of it's
// search based on the value of the halfway point of the array compared to the search value.

// write a function called binarySearch that takes a sorted array and a value. Then create two
// variables, one for the start of the array and one for the end. using these two variables
// determine the middle. While the left pointer is less than the right pointer:
// - createa pointer in the middle
// - if the value is too small move the left pointer up
// - if the value is too big move hte right pointer down
// - if it's never found return -1

function binarySearch(arr, val) {
  let leftP = 0;
  let rightP = arr.length - 1;

  while (leftP <= rightP) {
    let middle = Math.floor((leftP + rightP) / 2);

    if (arr[middle] === val) {
      return middle;
    }
    if (arr[middle] < val) {
      leftP = middle + 1;
    }
    if (arr[middle] > val) {
      rightP = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch([21, 44, 57, 77, 89, 102, 103, 200, 256, 390], 57));

// Binary search has a time complexity of O(log n).
