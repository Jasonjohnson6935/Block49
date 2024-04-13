/* Question 3 
Develop a 'countNodes' function to calculate the total nodes in a binary tree, and build a TreeNode class for a binary tree in JavaScript. 
For complete trees, it uses the formula 2^h - 1. 
Verify the function using a given root tree. 
For a binary tree input with nodes [10,11,12,13,14,15,16], the 'countNodes' function should yield an output of 7.
*/ 

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countNodes(root) {
    if (!root) return 0; // Base case: If tree is empty, return 0
    
    // Calculate height of the tree
    let height = 0;
    let current = root;
    while (current.left !== null) {
        height++;
        current = current.left;
    }
    
    // Calculate the number of nodes in a complete binary tree using the formula 2^h - 1
    return Math.pow(2, height) - 1 + countLastLevel(root, height);
}

function countLastLevel(node, height) {
    if (height === 0) return 1; // Base case: last level has only one node
    if (height === 1) {
        // If the last level has only one node, check if the right child exists
        if (node.right !== null) return 2;
        else if (node.left !== null) return 1;
        else return 0;
    }

    // Recursively count nodes in the last level
    let midNode = node.left;
    let level = 1;
    while (level < height) {
        midNode = midNode.right;
        level++;
    }

    if (midNode === null) return countLastLevel(node.left, height - 1);
    else return Math.pow(2, height - 1) + countLastLevel(node.right, height - 1);
}

// Create the root of the binary tree [10,11,12,13,14,15,16]
let root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(12);
root.left.left = new TreeNode(13);
root.left.right = new TreeNode(14);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(16);

// Test the countNodes function
console.log("Number of nodes in the binary tree:", countNodes(root)); // Output should be 7
