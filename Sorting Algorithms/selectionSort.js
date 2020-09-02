// SelectionSort is similar to bubbleSort. But instead of placing the large values
// at the end of the array. It places the small values into sorted position

// SelectionSort should only really be used over bubbleSort if you need to save memory
// since SS only does one swap, as BS does a swap at every comparison

// SelectionSort has a time complexity of O(n^2)

// Make a variable to store the minimum value. Iterate through the array and compare
// this number to the each index. If the number your comparing is smaller than the set
// minimum value, swap them. Continue iterating through the array and you'll have your
// smallest number in the front of the array. Repeat this, but start at th index after
// the last smallest number you set.

// I first implemente this without a variable that store the lowest number index.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr[i];
      if (arr[j] < arr[i]) {
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(selectionSort([9, 23, 4, 5, 2, 11, 333]));

// Here's the same function but with a variable that stores the lowest index for a swap

function selectionSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

console.log(selectionSort2([9, 23, 4, 5, 2, 11, 333]));

// This function will swap values even if the lowest value is already in the first index of
// the loop. Let's add a conditional that will only swap is lowest is != to i.

function selectionSort3(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest != i) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort3([9, 23, 4, 5, 2, 11, 333]));
