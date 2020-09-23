// Unlike Linked Lists, Trees can be traversed different ways. This section will
// go over a few different ways to hit every node in a tree regardless if the tree is
// sorted or not.

// There are to way to traverse a tree and each way has two implentations.

// Breadth first - Works across the tree levels
// Depth first PreOrder - Works from the top down
// Depth first PostOrder - Works from the bottom up
// Depth first InOrder - Works from bottom left and traverses tree in order

// * Copy and pasted the BST code from lesson 7
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// and the tree to store these nodes
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            //Checking for duplicate values here
            if (val === current.value) return undefined;
            if (val > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return tree;
                } else {
                    current = current.right;
                }
            } else {
                if (!current.left) {
                    current.left = newNode;
                    return tree;
                } else {
                    current = current.left;
                }
            }
        }
    }

    find(val) {
        let current = this.root;

        if (!this.root) return false;

        while (true) {
            if (val === current.value) return true;
            if (val > current.value) {
                if (!current.right) return false;
                current = current.right;
            } else {
                if (!current.left) return false;
                current = current.left;
            }
        }
    }

    // Breadth First Search method - returns all the nodes or values from a tree
    // - create a queue (this can be an array using push/shift) and an array to
    //   store the node values.
    // - BFS will return an array of all the tree values
    // - Place the root in the queue
    // - Loop as long as there is anything in the queue
    //    + Dequeue a node from the queue and push the value of the node
    //      into the variable that store the node values
    //    + If there is a left property on the node dequeued - add it to the queue
    //    + If there is a right property on the node dequeued - add it to the queue

    // Implementing BFS
    BFS() {
        let data = [];
        let queue = [];
        let current = this.root;

        queue.push(this.root);

        while (queue.length) {
            current = queue.shift();
            data.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return data;
    }
    // let tree = new BinarySearchTree();
    // tree.insert(10);
    // tree.insert(6);
    // tree.insert(15);
    // tree.insert(3);
    // tree.insert(8);
    // tree.insert(20);
    // console.log(tree.BFS());
    // console.log(tree);

    // Depth First PreOrder - Returns an array of values working from top to down
    //                        then left to right.
    // - create a variable to store the values of nodes visited
    // - store the root of the BST in a variable called current
    // - Write a helper function which accepts a node
    //   + push the value of the node to the variable that store values
    //   + If the node has a left property, call the helper function with the
    //     left property on the node.
    //   + Same thing if it has a right property with right values
    // - invoke the helper function with the current variable
    // - return the array of values

    depthPreOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);

        return data;
    }
    // let tree = new BinarySearchTree();
    // tree.insert(10);
    // tree.insert(6);
    // tree.insert(15);
    // tree.insert(3);
    // tree.insert(8);
    // tree.insert(20);
    // console.log(tree.depthPreOrder());
    // console.log(tree);

    // Depth First Search PostOrder - Starts from bottom left of the root and works right
    //                                and upwards from the root then up and left from the
    //                                right side of the root. The root is visited last.
    // - create a variable to store the values of nodes visited
    // - store the root of the BST in a variable called current
    // - Write a helper function which accepts a node
    //   + If the node has a left property, call the helper function with the
    //     left property on the node.
    //   + Same thing if it has a right property with right values
    //   + push the value of the node to the variable that store values
    // - invoke the helper function with the current variable
    // - return the array of values
    // **So only the order of the helper function changes - no values are stored in data
    //   until the recursion is completed

    depthPostOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(current);

        return data;
    }
    // let tree = new BinarySearchTree();
    // tree.insert(10);
    // tree.insert(6);
    // tree.insert(15);
    // tree.insert(3);
    // tree.insert(8);
    // tree.insert(20);
    // console.log(tree.depthPostOrder());
    // console.log(tree);

    // Depth First Search InOrder - returns an array of the node values in order
    // - create a variable to store the values of nodes visited
    // - store the root of the BST in a variable called current
    // - Write a helper function which accepts a node
    //   + If the node has a left property, call the helper function with the
    //     left property on the node.
    //   + push the value of the node to the variable that store values
    //   + Same thing if it has a right property with right values
    // - invoke the helper function with the current variable
    // - return the array of values

    depthInOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(current);

        return data;
    }
    // let tree = new BinarySearchTree();
    // tree.insert(10);
    // tree.insert(6);
    // tree.insert(15);
    // tree.insert(3);
    // tree.insert(8);
    // tree.insert(20);
    // console.log(tree.depthInOrder());
    // console.log(tree);
}
