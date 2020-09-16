// Stacks are an abstract data structure that follows a specific principal.
// LIFO = Last In First Out
// So the last thing you added to the list is the first thing removed. Like a
// stack of plates bein washed in the sink.

//  Ex:  <- 10 <- 7 <- 92 <- 32
// 10 is the last thing added so it will be the first thing removed.
// 32 was the first thing added and will be removed last, emptying the list

// The LIFO principal is something we've seen before. In recursion, the call stack
// follows the same guidelines. Hense "stack" in the name.

// Some languages have stack implementation built-in. JavaScript does not.

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

// console.log(stack);

//This is working from the end of the array. Let's work from the beginning
let stack2 = [];

// .unshift() adds items to the beginning of an array
stack2.unshift("amazon");
stack2.unshift("facebook");
stack2.unshift("reddit");

// .shift() removes things from the front of an array
stack2.shift();

// console.log(stack2);

// Now while both of these methods follow the FILO principal. Remember that removing
// and adding to the front of an array isn't a good idea because of index reassignment.
// So the shift/unshift method shouldn't be used if using an array.
// Also though.. Linked Lists are faster when at adding and removing anyway
// So we should probably stick to those..

// ---Linked List Implementation--
// All we need is a push and pop methods for a stack. But they need to be constant time
// If you remember push and pop need to iterate through the SLL to remove and add
// things to it. Making them O(n) time which isn't constant (O(1)). So we're going to
// use shift and unshift and disguise them as push and pop. Shift/unshift do not
// need to iterate, making them O(1). This is not needed with a DLL because push/pop
// are O(1) in a DLL.

// Time complexity of SLL Stacks
//        - Stacks prioritize insertion and removal so..
//          Insertion - O(1);
//          Removal - O(1);
//          Searching - O(N);
//          Access - O(N)

// creating a node class for the stack
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// creating the stack class to store the nodes
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
        }

        return ++this.size;
    }

    pop() {
        if (!this.first) return null;
        let oldFirst = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            oldFirst.next = null;
        }
        this.size--;

        return oldFirst.value;
    }
}

let stack3 = new Stack();
console.log(stack3.push("First"));
console.log(stack3.push("Second"));
console.log(stack3.push("Third"));
console.log(stack3.push("Fourth"));
console.log(stack3);
console.log(stack3.pop());
console.log(stack3.pop());
console.log(stack3);
