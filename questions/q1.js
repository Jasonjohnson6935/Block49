/* Question 1 
Begin by defining a Node class for the individual nodes in the binary tree, each containing a value and pointers for the left and right nodes. 
Following this, write an inorder function that receives a tree's root node as an argument and prints the node values in an inorder sequence. 
To test your solution, establish a binary tree containing nodes with integer values [1,2,3,4,5]. 
Invoke the inorder function to check the output [4,2,5,1,3]. */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function searchBottomLeftValue(root) {
    if (!root) return null;

    let result = null;
    let queue = [root];

    while (queue.length > 0) {
        const size = queue.length;
        result = queue[0].value; // Update result with the leftmost node value in each level

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
}

// Create the binary tree [2,1,3,4,5,6]
let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

// Test the searchBottomLeftValue function
console.log("Leftmost value in the last row:", searchBottomLeftValue(root)); // Output should be 6

