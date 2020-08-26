///////////////////////////////////
//          First Challenge
///////////////////////////////////


// Given two strings, write a function to determine if the second string is an anagram of the first
// An anagram is a word, phrase, or name formed by rearranging the letters of another. Such as "cinema"
// formed from "iceman".

// Assume that both parameters will be strings.

function anagram(str1, str2) {

  //Checking that string lengths match
  if (str1.length != str2.length) {
    return false;
  }

  //Setting objects to use as counters for string characters
  let freqCounter1 = {};
  let freqCounter2 = {};

  //Building string counting objects
  for (let char1 of str1) {
    freqCounter1[char1] = (freqCounter1[char1] || 0) + 1;
  }
  for (let char2 of str2) {
    freqCounter2[char2] = (freqCounter2[char2] || 0) + 1;
  }

  //Looping through one and comparing the the other returns false
  //if values of keys don't match up
  for (let key in freqCounter1) {
    if (freqCounter1[key] != freqCounter2[key]) {
      console.log("False")
      return false;
    }
  }

  console.log("True")
  return true;

}

// anagram("iceman", "cinema");

// Three seperate loops will still have a big O time complexity of O(3n) which is still O(n) as opposed to nesting loops
// which will give you O(n^2).


///////////////////////////////////
//     Instructors solution
///////////////////////////////////
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// validAnagram('anagrams', 'nagaramm')



///////////////////////////////////
//          Second Challenge
///////////////////////////////////

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  let str1Freq = {};

  for (let char of str1) {
    str1Freq[char] = (str1Freq[char] || 0) + 1;
  }

  for (let char of str2) {
    if (str1Freq[char]) {
      str1Freq[char]--
    } else {
      console.log('false')
      return false;
    }
    // console.log(str1Freq);

  }
  console.log('True')
  return true;
}

// sameFrequency(12212345, 12254321);
// sameFrequency(12212345, 12254326);
// sameFrequency(12212341, 12254321);


///////////////////////////////////
//       Instructor Solution
///////////////////////////////////

function sameFrequency2(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}



///////////////////////////////////
//         Third Challenge
///////////////////////////////////

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether 
// there are any duplicates among the arguemnts passed in. You can solve this using the frequency counter patter 
// OR the mulitple pointers pattern.

function areThereDuplicates(...args) {

  let counter = {};

  for (let element of args) {
    counter[element] = (counter[element] || 0) + 1;

    if (counter[element] > 1) {
      console.log("True")
      return true;
    }
  }
  console.log("False")
  return false;
}

// areThereDuplicates(1, 2, 3);
// areThereDuplicates(1, 2, 2);
// areThereDuplicates("a", "b", "c", "c", "d", "e");

///////////////////////////////////
//       Instructor Solution
///////////////////////////////////

function areThereDuplicates2() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false;
}

// One liner solution - converting an array to a set will remove all duplicates...TIL

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}






