// MergeSort involves spliting up an array into subarrays and repeating the process until you are
// left with n arrays that all contain two elements. Each of those 2-element arrays are sorted
// and then combined to form n number of 4 element arrays. this process repeats until you are left
// with one sorted array.

// MergeSort has a time complexity of O(n log n)

// First you write a function that merges two sorted arrays.
// Given two arrays which are sorted, this helper function should create a new array
// which is also sorted, and consists of all the elements in the two input arrays
// This function should run in O(n + m) time and space and should not modify the parameters
// passed to it.

// Create and empty array that will hold the compared values
// While there are still values we haven't looked at  - (While with i j)
// If the value in the first array is smaller than the second push the value
// of the first array into the empty array and move to the next index of the first.
// If the value of the first array is larger than the second array value, push the
// value of the second array and move that index instead.

function merge(arr1, arr2) {
  let newArr = [];
  let point1 = 0;
  let point2 = 0;

  while (point1 < arr1.length && point2 < arr2.length) {
    if (arr1[point1] < arr2[point2]) {
      newArr.push(arr1[point1]);
      point1++;
    } else {
      newArr.push(arr2[point2]);
      point2++;
    }
  }
  return newArr;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
