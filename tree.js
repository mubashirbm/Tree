class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BStree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else {
        if (value < root.value) {
          return this.search(root.left, value);
        } else {
          return this.search(root.right, value);
        }
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.man(root.right);
    }
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root,value){
    if(root===null){
        return root
    }if(value<root.value){
        root.left=this.deleteNode(root.left,value)
    }else if(value>root.value){
        root.right=this.deleteNode(root.right,value)
    }else{
        if(!root.left&&!root.right){
            return null
        }
        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }
        root.value=this.min(root.right)
        root.right=this.deleteNode(root.right,root.value)
    }
    return root
  }
  preOrder(root){
    if(root){
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
  }
}

const Bt = new BStree();
Bt.insert(32);
Bt.insert(3);
Bt.insert(42);
Bt.insert(62);
Bt.insert(12);
Bt.delete(3)
// console.log(Bt.search(Bt.root, 2));
Bt.preOrder(Bt.root)
// console.log(Bt);
