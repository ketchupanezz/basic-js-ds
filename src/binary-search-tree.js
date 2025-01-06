// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (node(data) < root.data) {
      if (root.left === null){
        root.left = node;
      } else {
        this.add(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.add(root.right, node);
      }
    }
  }

  has(data) {
    if (this.root(data) === null)
      return false;
    else return true;
  }

  find(data) {
    const node = new Node(data);
    if (this.has(data) == true) {
      this.root == node;
    } else {
      this.add(this.root, node);
    }
  }

  remove(data) {

  }

  min() {

  }

  max() {
  }


}

module.exports = {
  BinarySearchTree
};