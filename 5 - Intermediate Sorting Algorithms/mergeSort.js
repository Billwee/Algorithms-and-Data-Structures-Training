// MergeSort involves spliting up an array into subarrays and repeating the process until you are
// left with n arrays that all contain two elements. Each of those 2-element arrays are sorted
// and then combined to form n number of 4 element arrays. this process repeats until you are left
// with one sorted array.

// MergeSort has a time complexity of O(n log n) in all cases
// This is because the splitting of arrays doesn't grow at a linear rate
// ex: Array[8] = 3 splits   Array[32] = 5 splits <- O(log n)
// The mount of comparisons needed though is roughly the length of the array
// so as the length of the array grows the amount of comparisons also grows. O(n)

// It's space complexity is O(n)

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

///////////////////////
/// My implentation
///////////////////////

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
  if (point1 <= arr1.length || point2 <= arr2.length) {
    newArr = newArr.concat(arr1.slice(point1), arr2.slice(point2));
  }

  return newArr;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));
// console.log(merge([], [2, 14, 99, 100]));
// console.log(merge([10000], [2, 14, 99]));

////////////////////////
///  Instructors answer
////////////////////////

function merge2(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
// merge2([100, 200], [1, 2, 3, 5, 6]);

/////////////////////////////////////////////////////
// Adding this function into the mergeSort algorithm
///////////////////////////////////////////////////////

// Start by breaking the arrays into halves using .slice() until you're only left with
// empty or one element arrays. Then once you have those small arrays you merge them
// back together until you are at the full length of the array. Once the array is all
// back together you return it.

// I couldn't figure out the recursion using two functions

function mergeSort(arr) {
  let piece1 = arr.slice(0, Math.floor(arr.length / 2));
  let piece2 = arr.slice(Math.floor(arr.length / 2), arr.length);

  // console.log(piece1);
  // console.log(piece2);

  while (piece1.length >= 1) {
    console.log("one", piece1);
    console.log("two", piece2);
    mergeSort(piece1);
    mergeSort(piece2);
  }
}

// console.log(mergeSort([2, 11, 23, 45, 44, 75, 754, 34, 2233, 987, 6, 54]));

////////////////////////////////////
//// Instructors Solution
////////////////////////////////////

function mergeSort2(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort2(arr.slice(0, mid));
  let right = mergeSort2(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort2([2, 11, 23, 45, 44, 75, 754, 34, 2233, 987, 6, 54]));

// The left half declaration is defined over and over until its lenght is 1 and it returns a
// number then the right is defined over and over until the same. Then merge() is called
// on the two indiviual numbers. Which construts a sorted array. Merge can now be called on those
// two arrays
