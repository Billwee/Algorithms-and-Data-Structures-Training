// This pattern involves breaking up a data set into smaller, easier chunks and then repeating the process
// with the given subset of data.

// Binary search is an example of divide and counquer.

// Binary search is a function that searches a sorted array for a number.

// The naive approach involves just iterating through the array from the beginning until it's index is found.

function naiveSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// But the time complexity for this fucntion is O(n). Which isn't terrible for small arrays. But if you have an array with 
// a million elements it will take a long time to solve.

// The divide and counquer approach involves changes the time complexity to O(log(n)) which is very fast and does not 
// grow linearly or exponentually. 

function refactorSearch(arr, val) {
  //Setting min and max values for the search window
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    // Setting middle value in array
    let middle = Math.floor((min + max) / 2);
    let currentMiddle = arr[middle];

    // if the value we're searching for is bigger than the current middle value of the array,
    // the minimum search starting position changes to one index after the current middle.
    // If the value is smaller, tehn the max starting position is changed the current middle
    // position. This repeats until the current middle position is the searched value or it's not found.
    if (currentMiddle < val) {
      min = middle + 1;
    } else if (currentMiddle > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}