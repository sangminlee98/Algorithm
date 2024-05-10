/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
  let cnt = 0;
  function dfs(node, max) {
    if(!node) return;
    if(node.val >= max) cnt++;
    max = Math.max(node.val, max);
    dfs(node.left, max);
    dfs(node.right, max);
  }
  dfs(root, root.val);
  return cnt;
};