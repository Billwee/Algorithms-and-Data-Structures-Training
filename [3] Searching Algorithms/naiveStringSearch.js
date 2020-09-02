// Naive string search is used to finding substring within a given string.

// Given a string and a substring to search for. Loop over the longer string.
// Then loop over the shorter string. if the characters don't match, break
// out of the inner loop. if the characters do match, keep going. If you
// complete the inner loop and find a match, increment the count of matches
// by one. Return the count.

function naiveSearch(long, search) {
  counter = 0;
  for (let i = 0; i < long.length; i++) {
    // console.log(i);
    for (let j = 0; j < search.length; j++) {
      console.log(long[i + j], search[j]);
      if (long[i + j] != search[j]) break;
      if (j === search.length - 1) counter++;
    }
  }
  return counter;
}

console.log(naiveSearch("lorie loled", "lo"));
