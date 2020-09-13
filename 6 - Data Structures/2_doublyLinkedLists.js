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

    // Pop method - removes the last node from the list
    //
}
let list = new DoublyLinkedList();
list.push("FIRST");
list.push("SECOND");
list.push("THIRD");
list.push("FOURTH");
list.print();
