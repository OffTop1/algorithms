const BinarySearchTree = require('./implementation');

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(6);
bst.insert(2);
bst.insert(1);
bst.insert(7);
console.log(bst.minimum(bst.root));