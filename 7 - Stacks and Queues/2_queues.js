// Queues are another abstract data structure but they follow a different principal
// than Stacks.
// FIFO - First In First Out
// Think of a line of people. The first person added to that line is the first person
// to leave it. Or a print queue.. printing multiple things will print the first thing
// sent to the queue.

//  Ex:  10 -> 7 -> 92 -> 32 ->
// 32 was the first thing added so it will be the first thing removed.
// 10 was the last thing added and will be removed last, emptying the list

// -- Array Implemenation --

let queue = [];

// Using push and shift methods can achieve this
queue.push("First");
queue.push("Second");
queue.push("Third");
// console.log(queue);

queue.shift();
// console.log(queue);

// Or using unshift and pop works
let queue2 = [];
queue2.unshift("First");
queue2.unshift("Second");
queue2.unshift("Third");
// console.log(queue2);

queue2.pop();
// console.log(queue2);

// Both of these either remove or add from the beginning of the array. It works, but
// both ways require index reassigning. Which isn't good. Using a queue class with
// a linked list will gives us a faster implemenation.

// -- Linked List Implementation --

// Time complexity of SLL Queues
//        - Queues prioritize insertion and removal so..
//          Insertion - O(1);
//          Removal - O(1);
//          Searching - O(N);
//          Access - O(N)

// To achieve this with constant time we will add to the end and remove from the
// beginning. These will be the push and shift methods that we're used to but they
// will be named enqueue and dequeue. In a SLL, removing from the end requires
// iteration through the list to find the second to last node for reassignment.
// Which is not constant time - O(N). So pop and unshift can't be used.

// creating a node class for the queue
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// creating the queue class to store the nodes
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        let oldFirst = this.first;
        if (this.first === this.last) {
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

let queue3 = new Queue();
console.log(queue3.enqueue("First"));
console.log(queue3.enqueue("Second"));
console.log(queue3.enqueue("Third"));
console.log(queue3);
console.log(queue3.dequeue());
console.log(queue3.dequeue());
console.log(queue3.dequeue());
console.log(queue3.dequeue());
console.log(queue3);
