// QuickSort works along the same lines as merge sort. Using recursion and splitting arrays to single elements.
// In QS you use a "pivot point" and determining where in the array that it belongs. You find the pivot point
// and move every number less than it to it's left. This will put it the one element in the correct position.

// Given an array, this helper function should dsignate an element as the pivot.
// Then (like merge sort) it's responsible for arranging elements. But with quick sort the function
// moves elements to the left of the pivot if the pivot's value is greater. The order of the elements
// being moved doesn't matter. The function needs to do this in place. So it should not create a new
// array. When complete the function should return the index of the pivot.

function pivot(arr) {
  let i = 0;
  let j = 1;
  let pivot = Math.floor(Math.random() * arr.length);

  console.log("before", pivot);

  while (pivot > i) {
    if (arr[i] > arr[pivot]) {
      arr.splice(pivot + 1, 0, arr[i]);
      arr.splice(i, 1);
      pivot--;
    } else {
      i++;
    }
  }
  console.log("ater", pivot);
  console.log(arr);
}

pivot([3, 22, 33, 44, 11, 4, 5]);
