// Definition:
// Linked Lists are data structures that resemble arrays but instead of elements,
// which contain an index and value, a linked list consists of nodes which hold
// a value and a pointer which leads to another node or null. So you always
// start from the front (head) of a linked list to access values within it.
// So no random access is possible.

// A singly linked list only has nodes moving in one direction.
//  node 1 -> node 2 -> node 3 -> node 4
// There's also double linked lists which is discussed later

// Implementation:
// We'll start by making a Node class which stores:
// a piece of data - val
// reference to next node - next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Using this we can create a linked list

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// console.log(first);

// Although this isn't the best wa to implement this. It essentially creates
// a linked list. A first node with a value and a reference to the next
// node and so on...

// Now lets use another class to do this for us with instance methods
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Pushing node to end
    // this method accepts a value. Then creates a new node with that value
    // If there is no this.head value - set head & tail to value
    // Otherwise set property on the tail to be the new node and set the tail
    // property on the list on the list to be the newly created node.
    // increment length by 1.
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Popping item off end of list
    // Method doesn't need a value. If first checks if the list is empty and
    // returns undefined if it is.
    // It then sets a variable to the node of the head of the list and a loop is
    // started which ends when the node.next value is null. Meaning you're at
    // the end of the list. As this happens another variable is set to the current node
    // and the first variable is set to the next value in the list. When this loop ends
    // the value of the second varible will be the second to last node in the list
    // So setting it's .next value to null and setting the tail equal to it cuts off
    // the last node from the list. An edge case is checked afterwards. Checking if the
    // list is empty. If true, is sets the head a tail values to null so pop() will just
    // return undefined and this will prevent negative lengths.
    pop() {
        if (!this.head) return undefined;

        var current = this.head;
        while (current.next) {
            var pre = current;
            current = current.next;
        }

        pre.next = null;
        this.tail = pre;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // let list = new SinglyLinkedList();
    // list.push("HI");
    // list.push("HI AGAIN");
    // list.push("HI LAST TIME");
    // list.push("LAST TIME AGAIN");
    // console.log(list.pop());
    // console.log(list);

    // Shifting an item in the list
    // This involves removing the first item in the linked list.
    // First if there's no nodes, return undefined. Then store the current
    // head value in a variable. Set the head property to be the current head's
    // next property. Decrement the length by 1. Return the value of the
    // node returned.

    shift() {
        if (!this.head) return undefined;
        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }
}

let list = new SinglyLinkedList();
list.push("HI");
list.push("HI AGAIN");
list.push("HI LAST TIME");
list.push("LAST TIME AGAIN");
console.log(list.shift());
console.log(list);
