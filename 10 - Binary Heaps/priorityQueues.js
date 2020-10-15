// Priority Queues are binary heaps that are sorted by priority. Top priority (usually
// lower number === higher priority) is at the top while lower is store below. When new
// things are added to the queue it is sorted by priority and when things are removed
// (from the top first) the heap is resorted.

// - Write a Min Binary Heap - lower number === higher priority
// - Each Node has a val and priority. Use the priority to build heap
// - Enqueue method accepts a value and priority, makes a new node,
//   and puts it in the right spot based off it's priority.
// - Dequeue method removes root element, returns it, and rearranges heap
//   using priority.

class Node {
    constructor(val, priority) {
        (this.val = val), (this.priority = priority);
    }
}

class priorityQueue {
    constructor(values) {
        this.values = values;
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);

        this.values.push(newNode);

        let idx = this.values.length - 1;
        let parentIdx = Math.max(0, Math.floor((idx - 1) / 2));

        while (true) {
            if (this.values[idx].priority < this.values[parentIdx].priority) {
                let temp = this.values[idx];
                this.values[idx] = this.values[parentIdx];
                this.values[parentIdx] = temp;

                idx = parentIdx;
                parentIdx = Math.max(0, Math.floor((idx - 1) / 2));
            } else {
                break;
            }
        }
        return this.values;
    }

    dequeue() {
        if (this.values.length == 1) {
            let oldRoot = this.values[0];
            let end = this.values.pop();
            return oldRoot;
        }

        let oldRoot = this.values[0];
        let end = this.values.pop();
        this.values[0] = end;
        let idx = 0;

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            if (leftChildIdx < this.values.length) {
                let leftChildValue = this.values[leftChildIdx].priority;
            } else {
                let leftChildValue = -Infinity;
            }

            if (rightChildIdx < this.values.length) {
                let rightChildValue = this.values[rightChildIdx].priority;
            } else {
                let rightChildValue = -Infinity;
            }

            if (
                this.values[idx].priority > leftChildValue ||
                this.values[idx].priority > rightChildValue
            ) {
            }
        }
    }
}

let queue = new priorityQueue([]);
console.log(queue.enqueue("walk dog", 2));
console.log(queue.enqueue("eat snack", 3));
console.log(queue.enqueue("eat snack4", 4));
console.log(queue.enqueue("pay bills", 1));
console.log(queue.enqueue("eat snack5", 5));
console.log(queue.enqueue("eat snack3", 3));
