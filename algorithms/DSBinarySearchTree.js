// every parent node has at most two children
// left are less than parent, right greater than parent

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                }
                if (value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }  
            }
        }

    }
    find(value) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;
        while(!found && current) { 
            if(value < current.value){
                current = current.left
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    breadthFirstSearch() {
        let treeValues = [],
            queue = [],
            node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            treeValues.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return treeValues;
    }
    // for the depth search etc. you could take in a node to start at
    depthFirstSearchPreOrder() {
        let treeValues = [],
            current = this.root;
        function traverse(node){
            treeValues.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return treeValues;
    }
    depthFirstSearchPostOrder() {
        let treeValues = [],
            current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            treeValues.push(node.value);
        }
        traverse(current);
        return treeValues;
    }
    depthFirstSearchInOrder() {
        let treeValues = [],
            current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            treeValues.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return treeValues;
    }
}


//          10
//      6       15
//  3       8       20

let tree = new BinarySearchTree;
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log("Pre Order Search: [" + tree.depthFirstSearchPreOrder() + "]");
console.log("Post Order Search: [" + tree.depthFirstSearchPostOrder() + "]");
console.log("Post Order Search: [" + tree.depthFirstSearchInOrder() + "]");

