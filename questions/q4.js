/* Question 4 
Find the leftmost value in the last row of a binary tree with distinct node values. 
Use the TreeNode class, which defines a node's structure. 
Implement the 'searchBottomLeftValue(root)' function, taking the root of the binary tree as input. 
This function should return the value of the leftmost node in the last row of the tree. 
Test your function by using a binary tree with nodes [2,1,3,4,5,6] as input. 
The 'searchBottomLeftValue(root)' function should then return an output of 6.
*/ 

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
