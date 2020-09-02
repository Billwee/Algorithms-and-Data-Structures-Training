// KNP (Knuth Morris Pratt) search is another implementation of finding substrings within a string

// KMP involves using a pointer in the searched string and starting the search from that point.
// If the string isn't found, the pointer is moved up one index of the array and the next search
// begins there.

// KMP also uses an array pattern that checks for matching prefixes and suffixes (two matching patterns..
// one at the beginning and one at the end).

// This array pattern is built using two pointers iterating through the search value string and adding a
// numerical value for prefix and suffex matches in the array.

// The course I'm taking right now is reworking it's videos on KMP Search and I wrote this short description
// to help me get a basic understanding before it's uploaded.
