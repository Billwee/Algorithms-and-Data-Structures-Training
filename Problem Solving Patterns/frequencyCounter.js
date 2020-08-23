
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

anagram("iceman", "cinema");