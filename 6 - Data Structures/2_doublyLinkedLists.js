// Doubly Linked List
// DLLs are almost identical to SLLs but they contain an extra pointer to it's
// previous node. This gives the ability to work backwards through lists. This
// extra pointer though means that they use more memory.

////  node 1 <-> node 2 <-> node 3 <-> node 4

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
}

let list = new DoublyLinkedList();
list.push("FIRST");
list.push("SECOND");
list.push("THIRD");
list.push("FOURTH");
list.push("FIFTH");
list.push("SIXTH");
list.push("SEVENTH");
list.push("EIGHTH");
list.push("NINTH");
console.log(list.get(1));
console.log(list.get(6));
// list.print();
