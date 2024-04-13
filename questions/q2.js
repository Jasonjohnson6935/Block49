/* Question 2 
Create a Node class in JavaScript to build parts of a binary tree. 
Then, make an 'isSameTree' function. This function checks two binary trees and tells if they are the same or not. 
Test your function by making two binary trees and comparing them. 
For an input binary tree with nodes [1,2,3], 'isSameTree' should return 'true' for the same output [1,2,3] and 'false' otherwise.
*/ 

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isSameTree(p, q) {
    if (!p && !q) return true; // Both trees are empty, hence same
    if (!p || !q) return false; // One tree is empty while other is not, hence not same
    
    // Recursively compare left and right subtrees
    return p.value === q.value &&
           isSameTree(p.left, q.left) &&
           isSameTree(p.right, q.right);
}

// Creating two binary trees
// Tree 1: [1,2,3]
let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

// Tree 2: [1,2,3]
let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

// Testing isSameTree function
console.log("Are the two trees same?", isSameTree(tree1, tree2)); // Output should be true
