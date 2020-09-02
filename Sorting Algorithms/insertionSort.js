// Insertion sort is comparable to bubble and selection. With a few key
// differences.

// IS works a lot quicker that BS and SS when the array is almost sorted before
// before sorting.

// IS has an average time complexity of O(n^2). Although in best case scenerios
// its O(n).

// Space complexity of O(1)

// Inserion sort works by gradually creating a larger left half of the array which
// is sorted. It takes an index and inserts it in a sorted position on it's left
// by comparing it's value.

// Start by picking the second element in the array and compare it to the one before it.
// Continue to the next element. if its out in place, iterate through the sorted portion
// and determine it's placement. Repeat until the array is sorted.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
console.log(insertionSort([48, 22, 1, 77, 6, 97, 65]));

// Insertion Sort has a special preoerty that the other elementary sorting algorithms don't.
// The array bein sorted has the ability to be updated in real time. This is referred to
// as an Online Algorithm. this is possible because the sorting is only done from the point
// of it current index and to it's left. So pushing data into the array will not effect it
// sorting ability.
