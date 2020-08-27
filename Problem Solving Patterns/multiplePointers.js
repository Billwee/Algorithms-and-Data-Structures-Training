// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values 
// in the array. There can be negative numbers in the array, but it will always be sorted.

// NOTE: This only works on sorted arrays

/////////////////////////////////////
//         First Challenge
/////////////////////////////////////

function countUniqueValues(arr) {
  //Two pointers in the array. One moves on each iteration depending on the conditional
  let firstPointer = 0;
  let secondPointer = 1;

  // The loop stops when the second pointer reaches the end of the array
  while (secondPointer < arr.length) {
    // If both pointer values match the second pointer moves
    if (arr[firstPointer] == arr[secondPointer]) {
      secondPointer++;
      // If the second pointer moves to a value that is greater than the first pointer. The 
      // first pointer moves up and the value of the array at that new index is changed to 
      // the second pointer's value.
    } else if (arr[firstPointer] < arr[secondPointer]) {
      firstPointer++;
      arr[firstPointer] = arr[secondPointer];
    }
  }

  // Returns a spliced out array using the first pointer as the value of how many to return.
  // I guess since only the number of unique values is needed, "firstPointer + 1" can also just be returned.
  console.log(arr.splice(0, firstPointer + 1).length);
  console.log(firstPointer + 1);
  return arr.splice(0, firstPointer + 1).length;

}

// countUniqueValues([-3, -3, -1, 0, 1, 2, 2, 3, 4, 4, 4, 4]);



/////////////////////////////////
//    Instructor solution
/////////////////////////////////

function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}
// countUniqueValues2([1, 2, 2, 5, 7, 7, 99])




/////////////////////////////////////
//         Second Challenge
/////////////////////////////////////

// Write a function called averagePair. Given a sorted aray of integers and a target average, determine if there 
// is a pair of values in the array where the average of the pair equals the target average. There may be more 
// than one par that matches teh average target.

function averagePair(arr, target) {
  var pointer1 = 0;
  var pointer2 = 0;

  if (arr.length < 2) {
    console.log("False")
    return false;
  }

  while (pointer1 <= arr.length) {
    pointer2++;
    // console.log(pointer1, pointer2, arr.length);
    // console.log(arr[pointer1] + " / " + arr[pointer2]);
    if ((pointer2) < arr.length) {
      if ((arr[pointer1] + arr[pointer2]) / 2 === target) {
        console.log("True")
        return true;
      } else {
        continue;
      }
    }
    pointer2 = pointer1 + 1;
    pointer1++;
  }
  console.log("False")
  return false;
}

// averagePair([1, 2, 3], 2.5);
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
// averagePair([-1, 0, 3, 4, 5, 6], 4.1);
// averagePair([], 4);

/////////////////////////////////
//    Instructor solution
/////////////////////////////////

function averagePair2(arr, num) {
  let start = 0
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true;
    else if (avg < num) start++
    else end--
  }
  return false;
}


/////////////////////////////////////
//         Third Challenge
/////////////////////////////////////

// Write a function called isSubsequence which thakes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first strgin appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
      pointer2++;
    } else {
      pointer2++;
    }
    if (pointer1 === str1.length) {
      console.log("True")
      return true;
    }
  }
  console.log("False")
  return false;
}

// isSubsequence("hello", "hello world");
// isSubsequence("sing", "sting");
// isSubsequence("abc", "abracadabra");
// isSubsequence("abc", "acb");



/////////////////////////////////
//    Instructor solution
/////////////////////////////////
