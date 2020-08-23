
// Given two strings, write a function to determine if the second string is an anagram of the first
// An anagram is a word, phrase, or name formed by rearranging the letters of another. Such as "cinema"
// formed from "iceman".

// Assume that both parameters will be strings.


///////////////////////////////////
//          My solution
///////////////////////////////////
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

validAnagram('anagrams', 'nagaramm')