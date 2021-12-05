class Node {
    constructor(key) {
        this.key = key;
        this.right = null;
        this.left = null;
        this.parent = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        let node = new Node(key);

        let parent = null;
        let insertionPoint = this.root;

        while(insertionPoint !== null) {
            parent = insertionPoint;
            if(key < insertionPoint.key) {
                insertionPoint = insertionPoint.left;
            } else {
                insertionPoint = insertionPoint.right;
            }
        }
        node.parent = parent;
        if(parent === null) {
            this.root = node;
        } else {
            if(key < parent.key) {
                parent.left = node;
            } else {
                parent.right = node;
            }
        }
    }

    search(key) {
        let node = this.root;
        while(node !== null && node.key !== key) {
            if(key > node.key) {
                node = node.right;
            } else {
                node = node.left;
            }
        }
        return node;
    }

    delete(key) {
        let node = this.search(key);
        if(node === null) return null;
        let nodeToBeDeleted;
        if(node.left === null || node.right === null) {
            nodeToBeDeleted = node;
        } else {
            nodeToBeDeleted = this.previous(node);
        }
        if(node !== nodeToBeDeleted) {
            node.key = nodeToBeDeleted.key;
        }
        let childOfNodeToBeDeleted;
        if(nodeToBeDeleted.left !== null) {
            childOfNodeToBeDeleted = nodeToBeDeleted.left;
        } else {
            childOfNodeToBeDeleted = nodeToBeDeleted.right;
        }
        if(childOfNodeToBeDeleted !== null) {
            childOfNodeToBeDeleted.parent = nodeToBeDeleted.parent;
        } 
        if(nodeToBeDeleted.parent === null) {
            this.root = childOfNodeToBeDeleted;
        } else if(nodeToBeDeleted.parent.left) {
            nodeToBeDeleted.parent.left = childOfNodeToBeDeleted;
        } else {
            nodeToBeDeleted.parent.right = childOfNodeToBeDeleted;
        }
        return key;
    }

    previous(node) {
        if(node.left !== null) {
            return this.maximum(node.left);
        }
        let parent = node.parent;
        while(parent !== null && node === parent.left) {
            node = parent;
            parent = parent.parent;
        }
        return parent;
    }

    next(node) {
        if(node.right !== null) {
            return this.minimum(node.right);
        }
        let parent = node.parent;
        while(parent !== null & parent.right === node) {
            node = parent;
            parent = parent.parent;
        }
        return parent;
    }

    maximum(node) {
        if(node === null) {
            return null;
        }
        while(node.right !== null) {
            node = node.right;
        }
        return node;
    }

    minimum(node) {
        if(node === null) {
            return null;
        }
        while(node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

module.exports = BinarySearchTree;