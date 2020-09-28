// Heaps are another type of trees. We'll be working with binary heaps. There
// are two different types we'll be working with. A Max Binary Heap and a
// Min Binary Heap. A binary heap is similar to a Binary Search Tree
// with some different rules.

// In a Max Binary Heap, parent nodes are always larger than child nodes.
// In Min Binary Heaps, parent nodes are always smaller

// In a BH there is no left/right node relationship like in a binary search
// tree. Every node below the root is either larger (min) or smaller (max).

// Min/Max Binary Heaps
// - In Max the value of each parent node is always greater than it's children
// - In Min the value of each parent node is always lower than it's children
// - Each parent has at most two child nodes
// - This isn't true with siblings. No relationship.
// - A binary heap is as compact as possible. All the children of each node
//   are as full as they can be and left children are filled out first.

// You can represent a heap with a list or an array using this formula
// For any index of an array n...
// The left child it stored at 2n + 1
// The right child it stored at 2n + 2

// Example - Each line is a level of the tree

//                      100 - root
//                  19       36
//                17 12     25 5
//             9 15 6 11   13 8 1 4
//
// Array - [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4];

// So finding the children of 36..
// it's index is 2 so.. Left = 2*2+1 = 5 Right = 2*2+2
// its children are at index 5 and 6

// This can also be used to find the parent of a certain node
// Using (n-1)/2 floored
// Flooring the value will make the both children point to its parent

// Implementing MBH

class MaxBinaryHeap {
    constructor(values) {
        this.values = values;
    }

    // Insert method - Adds vlaues to the heap
    // This involves pushing a value into the array and then bubbling it up to the
    // correct position. This is done by comparing the inserted value to it's
    // parents value. If it's more then it's parent. They're swapped. This is
    // repeated until the parents value is higher.

    insert(val) {
        if (this.values.indexOf(val) >= 0) return null;
        this.values.push(val);

        let index = this.values.length - 1;
        let parentIndex = Math.max(0, Math.floor((index - 1) / 2));

        console.log(index, parentIndex);

        while (true) {
            if (this.values[index] > this.values[parentIndex]) {
                let temp = this.values[index];
                this.values[index] = this.values[parentIndex];
                this.values[parentIndex] = temp;

                index = parentIndex;
                parentIndex = Math.max(0, Math.floor((index - 1) / 2));
            } else {
                break;
            }
        }
        return this.values;
    }
    //     INSTRUCTORS SOLUTION
    //
    // insert(element){
    //     this.values.push(element);
    //     this.bubbleUp();
    // }
    // bubbleUp(){
    //     let idx = this.values.length - 1;
    //     const element = this.values[idx];
    //     while(idx > 0){
    //         let parentIdx = Math.floor((idx - 1)/2);
    //         let parent = this.values[parentIdx];
    //         if(element <= parent) break;
    //         this.values[parentIdx] = element;
    //         this.values[idx] = parent;
    //         idx = parentIdx;
    //     }
    // }

    // Removing method - Removing a number from a heap
    // This is mostly used for removing the root from a heap. The procedure
    // for deleting the root from the heap (effectivey extracting the max/min
    // value) and restoring the properties into a new heap is called down-heap.
    // (Also known as bubble-down, percolate-down, sift-down, trickle-down,
    // heapify-down, cascade-down, sink-down, and extract-min/max)

    // - swap the first value in the values property with the last
    // - pop from the values property
    // - have the new root down-heap to the correct spot
    //

    extractMax() {
        // prettier-ignore
        this.values[0], this.values[this.values.length - 1] = this.values[this.values.length - 1], this.values[0];
        this.values.pop();
    }
}

let heap = new MaxBinaryHeap([]);
console.log(heap.insert(90));
console.log(heap.insert(12));
console.log(heap.insert(33));
console.log(heap.insert(45));
console.log(heap.insert(84));
console.log(heap.insert(100));
console.log(heap.insert(1));
