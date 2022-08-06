/**
 * 反转二叉树
 * @param {*} node 树节点
 * @returns
 */
function reverseBTree(node) {
  if (!node) return;
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
  reverseBTree(node.left);
  reverseBTree(node.right);
}
