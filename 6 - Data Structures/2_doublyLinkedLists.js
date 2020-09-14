// Doubly Linked List
// DLLs are almost identical to SLLs but they contain an extra pointer to it's
// previous node. This gives the ability to work backwards through lists. This
// extra pointer though means that they use more memory.

////  node 1 <-> node 2 <-> node 3 <-> node 4

// Time complexity:
//  Insertion - O(1)
//  Removal - O(1) - Constant, unlike SLLs
//  Searching - O(n) - Technically, searching is O(n/2) because we remove half the
//                     search from the start. But that is still O(n) in Big O Notation.
//  Access - O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // var first = new Node("Hi");
    // first.next = new Node("there");
    // first.next.prev = first;
    // first.next.next = new Node("How");
    // first.next.next.prev = first.next;
    // first.next.next.next = new Node("are");
    // first.next.next.next.prev = first.next.next;
    // first.next.next.next.next = new Node("you");
    // first.next.next.next.next.prev = first.next.next.next;
    // console.log(first);

    // VS Code doesn't do a great job of printing the list so I added this function.
    print() {
        let current = this.head;
        while (current) {
            console.log("VALUE - ", current.val);
            console.log("NEXT - ", current.next);
            console.log("PREV - ", current.prev);
            console.log("----------------");
            current = current.next;
        }
        console.log("LENGTH - ", this.length);
    }

    // Push method - adds nodes to the end
    // Create a new node with the value passed in. If the list is empty then
    // head = tail = newNode. Otherwise set the .next value of the tail to the
    // newNode. Then set the .prev value of the newNode to the tail. Lastly, set
    // the tail to the newNode.
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // let list = new DoublyLinkedList();
    // list.push("FIRST");
    // list.push("SECOND");
    // list.push("THIRD");
    // list.push("FOURTH");
    // list.print();

    // Pop method - removes the last node from the list
    // Way easier that SLL since we have access to .prev at the tail. First you should
    // check if there's a list at all. Return undefined if not. Then if the list has
    // only one node then set the tail and head to be null. Otherwise update the tail
    // to be the previous node. Set the old tails .prev to null. Set the new tails's
    // .next to null. Finally, decrement the length.
    // ** Note - you also will need to delete the .prev value of the old tail. Not doing
    // so will leave the list vunerable to access. Although the new tail doesn't lead to
    // the severed node. The severed oldTail node still has a .prev that points to the new tail.

    pop() {
        let oldTail = this.tail;
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }
    // let list = new DoublyLinkedList();
    // list.push("FIRST");
    // list.push("SECOND");
    // list.push("THIRD");
    // list.push("FOURTH");
    // console.log(list.pop());
    // list.print();

    // Shift method - Removes a node to the front of the list
    // The Shift method of DLLs are very similar to it's pop method. If there is no list
    // return undefined. If there is one node in the list the head and tail are set to
    // null. Otherwise store the old head in a variable. Set the head equal to the oldHead.next
    // set the oldHead.next to null and the newHead.prev to null. Decrement the list and return
    // the var you stored the oldHead in.
    // ** As with pop() but at the other end..  in shift() you need to separate the link
    // from the oldHead leading to the newHead.

    shift() {
        let oldHead = this.head;
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }
    // let list = new DoublyLinkedList();
    // list.push("FIRST");
    // list.push("SECOND");
    // list.push("THIRD");
    // list.push("FOURTH");
    // console.log(list.shift());
    // list.print();

    // Unshift method - Adds a node to the front of the list
    // Unshift takes a value so pass in a value and create a new node with it. Then
    // check if the length is 0 and make the head and tail the newNode if it is.
    // Otherwise set the .prev value on the oldHead to be the newNode. Set the .next
    // on the new node to the oldHead. Set the newNode to be the head. Increment the
    // length then return the list.

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return list;
    }
    // let list = new DoublyLinkedList();
    // list.push("FIRST");
    // list.push("SECOND");
    // list.push("THIRD");
    // list.push("FOURTH");
    // console.log(list.unshift("NEW FIRST"));
    // list.print();

    // Get method - Returns a node based on the position passed to the method.
    // First check if you're passing in a valid index. If not return null. There
    // is one key difference when searching through a DLL as opposed to a SLL. You
    // don't always have to start at the beginning of a DLL. If the index you're
    // searching for is > the (.length / 2) then you should start at the end instead
    // of the beginning.

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        if (!this.head) return undefined;
        var mid = this.length / 2;
        let current;
        if (idx <= mid) {
            let counter = 0;
            current = this.head;
            while (counter < idx) {
                current = current.next;
                counter++;
            }
        } else {
            let counter = this.length - 1;
            current = this.tail;
            while (counter > idx) {
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    // let list = new DoublyLinkedList();
    // list.push("FIRST");
    // list.push("SECOND");
    // list.push("THIRD");
    // list.push("FOURTH");
    // list.push("FIFTH");
    // list.push("SIXTH");
    // list.push("SEVENTH");
    // list.push("EIGHTH");
    // list.push("NINTH");
    // console.log(list.get(1));
    // console.log(list.get(6));

    // Set method -  changes a value within a node at a given index
    // To implement set() you can use the get() to obtain the node at a given index.
    // Save this node to a variable, update it, and return true. If it doesn't
    // return a valid response then return false.

    set(idx, val) {
        if (this.get(idx)) {
            this.get(idx).val = val;
            return true;
        }
        return false;
    }
    // let list = new DoublyLinkedList();
    // list.push("FIRST");
    // list.push("SECOND");
    // list.push("THIRD");
    // list.push("FOURTH");
    // console.log(list.set(1, "UPDATE"));
    // console.log(list.set(3, "ANOTHER UPDATE"));
    // console.log(list.set(-1, "UPDATE"));
    // console.log(list.set(10, "UPDATE"));
    // list.print();

    // Insert method - Inserts a new node within a list given an index
    // This method also uses the get() method to find our place. First, check the index is valid
    // if not, return false. If the index is 0 use upshift() if the index is = .length use
    // .push() to add it to the end. After that use get() to access the (index - 1). Then set all
    // links so the nodes properly connect to each other. Increment the list and return true.

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(idx - 1);

        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        newNode.next.prev = newNode;
        this.length++;
        return true;
    }
    // let list = new DoublyLinkedList();
    // list.push("FIRST");
    // list.push("SECOND");
    // list.push("THIRD");
    // list.push("FOURTH");
    // console.log(list.insert(4, "UPDATE END")); // Should be at the end after running - also it runs .push()
    // console.log(list.insert(2, "ANOTHER UPDATE")); // only returns "true"
    // console.log(list.insert(0, "UPDATE FRONT")); // returns .unshift()
    // list.print(); // Prints the list

    // Remove method - Removes a node at given index
    // Once again we use get() to get the position of the node to be removed. First we
    // check if the index is 0 or (.length - 1) in those cases use shift() or pop() to
    // remove them. Use get() to access the node to be removed and update the links
    // of the .next and .prev properties to remove the node from the list. Set .next
    // and .prev on the found node to null. Decrement the length and return the found node.

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        let removedNode = this.get(idx);

        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
    // let list = new DoublyLinkedList();
    // list.push("FIRST");
    // list.push("SECOND");
    // list.push("THIRD");
    // list.push("FOURTH");
    // list.push("FIFTH");
    // list.push("SIXTH");
    // list.push("SEVENTH");
    // console.log(list.remove(4));
    // console.log(list.remove(1));
    // console.log(list.remove(0));
    // console.log(list.remove(5));
    // console.log(list.remove(3));
    // list.print();

    // Reverse method - Reverses the order of the list
    // This was not included in the lessons but was a question in the exercises. I'm not
    // sure if my solution is implemented the best way but I know since DLLs have a backwards
    // pointer, all I needed to do was swap the pointers at every node in the list. Then
    // afterwards swap the head and tail. I'm sure a for loop is a better option but I went
    // with a while at first and it worked...

    reverse() {
        let counter = this.length - 1;
        let current = this.tail;

        while (counter >= 0) {
            let temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = current.next;
            counter--;
        }
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        return this;
    }
    // let list = new DoublyLinkedList();
    // list.push("FIRST");
    // list.push("SECOND");
    // list.push("THIRD");
    // list.push("FOURTH");
    // console.log(list.reverse());
    // list.print();
}
