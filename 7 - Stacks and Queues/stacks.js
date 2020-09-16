// Stacks are an abstract data structure that follows a specific principal.
// LIFO = Last In First Out
// So the last thing you added to the list is the first thing removed. Like a
// stack of plates bein washed in the sink.

//  Ex:  <- 10 <- 7 <- 92 <- 32
// 10 is the last think added so it will be the first thing removed.
// 32 was the firs thing added and will be removed last, emptying the list

// The LIFO principal is something we've seen before. In recursion, the call stack
// follows the same guidelines. Hense "stack" in the name.

// --Array Implementation--
// Use case - storing interent browsing history
// Create and empty array
let stack = [];

// .push() adds things to the end of the array.
stack.push("google");
stack.push("instagram");
stack.push("youtube");

// .pop() removes the last thin in the array.
stack.pop();

console.log(stack);

//This is working from the end of the array. Let's work from the beginning
let stack2 = [];

// .unshift() adds items to the beginning of an array
stack2.unshift("amazon");
stack2.unshift("facebook");
stack2.unshift("reddit");

// .shift() removes things from the front of an array
stack2.shift();

console.log(stack2);

// Now while both of these methods follow the FILO principal. Remember that removing
// and adding to the front of an array isn't a good idea because of index reassignment.
// So the shift/unshift method shouldn't be used if using an array.
// Also though.. Linked Lists are faster when at adding and removing anyway
// So we should probably stick to those..

// ---Linked List Implementation--
