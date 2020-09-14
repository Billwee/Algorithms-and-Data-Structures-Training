// Definition:
// Linked Lists are data structures that resemble arrays but instead of elements,
// which contain an index and value, a linked list consists of nodes which hold
// a value and a pointer which leads to another node or null. So you always
// start from the front (head) of a linked list to access values within it.
// So no random access is possible.

// Time complexity:
// Insertion - O(1) -- better than arrays O(n)
// Removal - O(1) from begnning or O(n) from end -- better than arrays O(n) always
// Searching - O(n) -- Worse than arrays O(1)
// Access - O(n) -- Worse than arrays O(1)

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

    // Shifting an item in the list - removing first node
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
    // let list = new SinglyLinkedList();
    // list.push("HI");
    // list.push("HI AGAIN");
    // list.push("HI LAST TIME");
    // list.push("LAST TIME AGAIN");
    // console.log(list.shift());
    // console.log(list);

    // Unshift from the list - add to beginning of list
    // This method accepts a value. This value is then used to create a new node
    // if there is no head property (it's empty) set the head and tail to the new
    // node value. Otherwise set the new node's next property to the current head
    // value. Then set the head value of the list to be the newly created node.
    // increment the list by one and return the whole list.

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // let list = new SinglyLinkedList();
    // list.push("HI");
    // list.push("HI AGAIN");
    // list.push("HI LAST TIME");
    // list.push("LAST TIME AGAIN");
    // console.log(list.unshift("INSERTED"));
    // console.log(list);

    // Get method - retrieving an item in the list by position
    // LinkedLists do not have a built in index like arrays. To et a value from
    // the list. You need to start at the first node and .next your way until
    // you've reached your destination. Then return it.

    get(idx) {
        if (idx < 0 || idx > this.length) return null;

        let current = this.head;
        let counter = 0;

        while (idx > counter) {
            current = current.next;
            counter++;
        }

        return current;
    }
    // let list = new SinglyLinkedList();
    // list.push("HI");
    // list.push("HI AGAIN");
    // list.push("HI LAST TIME");
    // list.push("LAST TIME AGAIN");
    // console.log(list.get(2));
    // console.log(list.get(4));

    // Set method - change the value of a node based on position
    // This method accepts an index to find and  value to update. The get
    // method we just created can be used to find the node that needs updating.

    set(idx, val) {
        if (!this.get(idx)) return false;

        let found = this.get(idx);
        found.val = val;
        return true;
    }
    // let list = new SinglyLinkedList();
    // list.push("HI");
    // list.push("HI AGAIN");
    // list.push("HI LAST TIME");
    // list.push("LAST TIME AGAIN");
    // console.log(list.set(6, "UPDATED!"));
    // console.log(list.set(2, "UPDATED!"));
    // console.log(JSON.stringify(list));

    // Insert method - Adds a node at the specified location
    // Same as set but instead a new node is created and inserted into the list
    // this method takes in an index and a value. If the value is < 0 or > than the
    // length, return false. If the index === length then just .push() the value
    // to the end of the list. If the index is 0, then .unshift() the value into
    // the list. Otherwise use .get() to access the node at one less of the index
    // passed the the method. (.get(idx - 1)). Set the .next property of that node
    // to the new node. Set the .next property on the new node to be the .next value
    // of the found node. then increment the length and return true.

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        // Adding !! in front of a function call will return true if the function
        // returns a value
        if (idx === this.length) return !!this.push(val);
        if (idx === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let insertPoint = this.get(idx - 1);
        let temp = insertPoint.next;
        insertPoint.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    // let list = new SinglyLinkedList();
    // list.push("HI");
    // list.push("HI AGAIN");
    // list.push("HI LAST TIME");
    // list.push("LAST TIME AGAIN");
    // console.log(list.insert(1, "UPDATED!"));
    // console.log(list.insert(0, "FIRST UPDATED!"));
    // console.log(list.insert(6, "LAST UPDATED!"));
    // console.log(JSON.stringify(list));

    // Remove method - removes a node at given index.
    // This method takes an index. If the index is < 0 or >= the length
    // return undefined. If the index is the same as length - 1 then just
    // .pop it off. If the index is 0 then shift the value off. Otherwise
    // use the get method to access index - 1. Set the next property on that
    // node to be the .next.next. Decrement the length and return the value
    // of the node removed.

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();

        let before = this.get(idx - 1);
        let removed = this.get(idx); //or before.next
        before.next = before.next.next; //or removed.next
        this.length--;

        return removed.val;
    }
    // let list = new SinglyLinkedList();
    // list.push("HI");
    // list.push("HI AGAIN");
    // list.push("HI LAST TIME");
    // list.push("LAST TIME AGAIN");
    // console.log(list.remove(2));
    // console.log(JSON.stringify(list));

    // Reverse method - Reverses the order of the list
    // First you swap the head and the tail of the list. Then you create
    // three variables: next, prev, and node (initialze to the head
    // property). Loop through the list. Set the next varible to the
    // next property on whatever node is. Then set the next property on
    // the node variable to be whatever prev is. Then set prev to be the
    // node variable. Finally set the node variable to be the next
    // variable.

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next = null;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        // -> Or with a while loop
        // let counter = 0;
        // while (counter < this.length) {
        //     next = node.next;
        //     node.next = prev;
        //     prev = node;
        //     node = next;
        //     counter++;
        // }

        return this;
    }
    // let list = new SinglyLinkedList();
    // list.push("HI");
    // list.push("HI AGAIN");
    // list.push("HI LAST TIME");
    // list.push("LAST TIME AGAIN");
    // console.log(JSON.stringify(list));
    // console.log(JSON.stringify(list.reverse()));
}
