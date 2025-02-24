class Node {
  constructor(key) {
    this.val = key;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let curr = this.root;
      while (true) {
        if (key[0] < curr.val[0]) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(key);
            break;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  preorder() {
    const result = [];

    function traverse(node) {
      if (node) {
        result.push(node.val[2]);
        traverse(node.left);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return result;
  }

  postorder() {
    const result = [];

    function traverse(node) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.val[2]);
      }
    }

    traverse(this.root);
    return result;
  }
}

function solution(nodeinfo) {
  const nodeInfoWithIndex = nodeinfo.map((node, idx) => [...node, idx + 1]);

  const sortedNodeInfo = nodeInfoWithIndex.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return b[1] - a[1];
  });

  const bst = new BST();
  for (const key of sortedNodeInfo) {
    bst.insert(key);
  }

  return [bst.preorder(), bst.postorder()];
}