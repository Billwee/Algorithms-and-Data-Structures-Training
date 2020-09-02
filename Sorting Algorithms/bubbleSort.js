// BubbleSort is a sorting algorithm where the largest values bubble up to the top

// BubbleSort is not a very popular or fast sorting algorithm

// BubbleSort has a time complexity of O(n^2)

// BS will use two pointers srating at the first and second indexes of the array and compare them.
// If the first index value is greater than the second, their values are swapped. If not then
// nothing happens. After the comparison, the two indexes move up and element and compare again.
// This action will move the largest value to the end of the array. Then the comparison process is
// repeated and the last index of the array is ignored. This repeats until the array is sorted from
// smallest to largest value.

// Naive version - this version always comapres everything in the array which isn't needed.
// The last value in the array will always be the biggest value after the loop.
// It also compares the last index of the array with an index outside of the array which
// is unnecessary.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// More optimized version - this version shrinks the endpoint of the comparison checks by one
// after each loop. eliminating the excess comparing.

function bubbleSort2(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      let temp = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 4, 9, 16, 33, 74]));
console.log(bubbleSort2([1, 4, 9, 16, 33, 74]));

// There's an ES2015 way of swapping values in an array as well using a function after making the
// comparison.

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};


// These BubbleSorts, while working, aren't exactly as efficent as they can be.
// for example.. if the last half of the list is already sorted. It will still 
// iterate through them while only removing one at the end at a time.
// If we add a boolean that changes when no swaps are done we can effectivly 
// end the sorting a lot earlier.

function bubbleSort3(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      let temp = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) return arr;
  }
  return arr;
}

console.log(bubbleSort3([111, 1214, 39, 146, 323, 674]));




