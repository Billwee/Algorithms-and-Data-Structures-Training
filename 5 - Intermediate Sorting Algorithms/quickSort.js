// QuickSort works along the same lines as merge sort. Using recursion and splitting arrays to single elements.
// In QS you use a "pivot point" and determining where in the array that it belongs. You find the pivot point
// and move every number less than it to it's left. This will put it the one element in the correct position.

// Quick Sort has a time complexity of O(n log n)
// log n for the splitting the array
// n for the comparisons after splitting

// Helper function
// Given an array, this helper function should dsignate an element as the pivot.
// Then (like merge sort) it's responsible for arranging elements. But with quick sort the function
// moves elements to the left of the pivot if the pivot's value is greater. The order of the elements
// being moved doesn't matter. The function needs to do this in place. So it should not create a new
// array. When complete the function should return the index of the pivot.

///////////////////////////////////////////////
///// My  function
///////////////////////////////////////////////

// When constructing this I wasn't aware that you needed to pass in the length of the array
// you'll be searching through. I was only told to return the index of the pointer. But now I understand
// that the length is needed for the recursive part of the algorithm.

function pivot(arr) {
  let i = 0;
  //   let pivot = Math.floor(Math.random() * arr.length);
  let pivot = 0;
  let j = pivot + 1;

  console.log("before", pivot);

  while (j <= arr.length - 1) {
    if (arr[j] < arr[pivot]) {
      console.log("after p LESS");
      arr.splice(pivot, 0, arr[j]);
      arr.splice(j + 1, 1);
      pivot++;
      // console.log(arr, pivot, j);
    } else {
      j++;
    }
  }

  //   console.log("first loop done", arr, pivot);

  while (i <= pivot) {
    if (arr[i] > arr[pivot]) {
      console.log("before p MORE");
      arr.push(arr[i]);
      arr.splice(i, 1);
      pivot--;
      //   console.log(arr, pivot, i);
      if (pivot === i) i++;
    } else {
      i++;
    }
  }
  console.log("after", pivot);
  console.log(arr);

  return pivot;
}
// pivot([3, 22, 33, 44, 11, 4, 5]);

////////////////////////////
/// Instructors solution
///////////////////////////

//This way, the pivot is always the first index of the array.

function pivot2(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;

  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// console.log(pivot2([3, 22, 33, 44, 11, 4, 5]));

///////////////////////////
////Final algorithm
///////////////////////////

// arr.length is never changing, only left and right are changing on each call.
// once left === right you have a single index array and it's returned instead of adding to the stack
// set the index of what you pivoted from and pass that length into a recursive calls that
// work from the left and right sub array constructed from the index ofthe pivot.

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot2(arr, left, right);

    //left
    quickSort(arr, left, pivotIdx - 1);
    //right
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
console.log(quickSort([2324, 16, 339, 41, 251, 53, 3111]));
