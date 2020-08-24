// Useful for finding sections (a window) of strings or arrays that match a certian condition. Depending on the condition
// the window will either increase, move, or close (and a new window is created). Useful for keep track of subsets of arrays and strings.

/////////////////////////////////
///  Example
////////////////////////////////

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The 
// function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
  //declaring an initial max value and temp value for comparing.
  let maxSum = 0;
  let tempSum = 0;

  // If the consecutive number arguement is larger than the length of the array return null.
  if (arr.length < num) return null;

  // This loop sets the first summed n values in the array. 
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // This loop now moves the window through the array by subracting the first number in the window from the 
  // total and adding the next number after the window. Effectivly moving the window one space and
  // getting the new summed value for it. Afterward the maxSum is updated if the temp sum is larger than 
  // the current maxSum value.  
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log(maxSum);
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
