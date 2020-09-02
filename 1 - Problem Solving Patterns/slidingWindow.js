// Useful for finding sections (a window) of strings or arrays that match a certian condition. Depending on the condition
// the window will either increase, move, or close (and a new window is created). Useful for keep track of subsets of arrays and strings.

/////////////////////////////////
///  Challenge 1
/////////////////////////////////

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

// maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)



/////////////////////////////////
///  Instructor Solution
/////////////////////////////////



/////////////////////////////////
///  Challenge 2
/////////////////////////////////

// Write a function called minSubArrayLen which accepts two parameters - an array of positive 
// integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or
// equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(arr, int) {
  let subArrLength = 0;
  let startWindow = 0;
  let endWindow = 1;

  // for(let i = 0; i < arr.length; i++){
  //   let sum = arr[i]
  // }

  while (subArrLength <= arr.length) {
    let window = arr.slice(startWindow, endWindow);


  }

  // Couldn't figure this one out without nesting loops.


}



/////////////////////////////////
///  Instructor Solution
/////////////////////////////////

function minSubArrayLen2(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window 
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }


  console.log(minLen === Infinity ? 0 : minLen)
  return minLen === Infinity ? 0 : minLen;
}

// minSubArrayLen2([2, 3, 1, 2, 4, 3], 7);
// minSubArrayLen2([2, 1, 6, 5, 4], 9);
// minSubArrayLen2([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);
// minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);
// minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);
// minSubArrayLen2([4, 3, 3, 8, 1, 2, 3], 11);
// minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);


/////////////////////////////////
///  Challenge 3
/////////////////////////////////

// Write a function called findLongestSubstring, which accepts a string and returns the 
// length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
  let start = 0;
  let end = 0;
  let counter = {};
  let maxLength = 0;

  while (start < str.length && end < str.length) {
    counter[str[end]] = (counter[str[end]] || 0) + 1;
    if (counter[str[end]] > 1) {
      maxLength = Math.max(maxLength, (end - start));
      start++;
      end = start;
      counter = {};
    } else {
      end++;
    }
    if (end === str.length) {
      maxLength = Math.max(maxLength, (end - start));
      console.log(maxLength);
      return maxLength;
    }
  }

  console.log(maxLength)
  return maxLength;
}

findLongestSubstring('');
findLongestSubstring('rithmschool');
findLongestSubstring('thisisawesome');
findLongestSubstring('thecatinthehat');
findLongestSubstring('bbbbbb');
findLongestSubstring('longestsubstring');
findLongestSubstring('thisishowwedoit');



/////////////////////////////////
///  Instructor Solution
/////////////////////////////////

function findLongestSubstring2(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}


