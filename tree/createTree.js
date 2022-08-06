class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(9);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(3);
root.right.right.left = new TreeNode(8);

console.log(root);
