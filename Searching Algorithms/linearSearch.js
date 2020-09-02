// Intro to Linear search

// Write a function that accepts an array and a value. Loop through the array and check
// if the current element is equal to the value. If it is, return the index at which the
// element is found. If the value if never found return -1.

function linear(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

// Linear search is basically an implementation on .indexOf() or .includes()

// The array passed in does not need to be sorted.

// It's time complexity is O(n). So as the array grows the time needed grows at the same rate.
