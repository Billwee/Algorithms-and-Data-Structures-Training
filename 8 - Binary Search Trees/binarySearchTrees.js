// Trees are a data structure that consists of nodes in a parent/child relationship.

// Comparing trees to lists:
// Lists are linear meaning one pathway of nodes through all the data. Trees are
// nonlinear so one node can lead to many other nodes. Trees in special cases can be lists
// when there is only a single pathway of data.

// Rules for trees:
// There can only be one starting point in a tree. Called the root.
// Trees cannot contain siblings leading to each other. For example.. The top of the
// contains a "Car" node, which has "Make" children. Those "Make" children have "Model"
// children. "Make" nodes cannot point to other "Make" nodes. They can only point to
// "Model" nodes. Same goes with "Model" nodes, they cannot point to other "Models".
// All data in a tree must flow away from the root and eventually to a node with no
// children called Leaves/Leaf. Connections between nodes are called Edges.

// Use cases for trees:
// -HTML/DOM utilization is tree based. Starts with the <body> element and branches
//  off into many different elements and children.
// -Filing systems in computers
// - JSON objects

// Types of trees:
// Trees - What we discussed above.
// Binary Trees - A tree with a condition that each parent can't have more than 2 children.
// Binary Search trees - A binary tree that is sorted in a certain way that each child
//                       on the left of a parent is less than it and the child on right
//                       is greater than it.

// BTS example -  A root of 40 has a node of 20 on it's left and 65 on it's right
// the 20 node has a node of 11 on it's left and 29 on it's right. the 65 node has a
// node of 50 on it's left and 91 on it's right... and so on until you have only
// leaves at the bottom.

// Time complexity of BTSs
//

//Implementing a BTS

//First we create a class for the nodes
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
    // Adding values to the tree:
    // let tree = new BinarySearchTree();
    // tree.root = new Node(10);
    // tree.root.right = new Node(15);
    // tree.root.left = new Node(7);
    // tree.root.left.right = new Node(9);
    // console.log(tree);

    // Insert method - adds a value to the tree
    // First you create a new node with the value passed in and check if there's a root.
    // If not, that new node becomes the root. If a root exists compare it's value with the
    // newNode value. If it's greater, check to see if there's a node to the right. if
    // there is move to tha node and repeat these steps. If not, add that node as the .right
    // property. The same steps apply if the value is less than the node but you traverse
    // the left side of the node.

    insert(val) {}
}
