/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const arr1 = [];
  const arr2 = [];
  function dfs(root, arr) {
    if(!root.left && !root.right) {
      arr.push(root.val); 
      return;
    }
    root.left && dfs(root.left, arr);
    root.right && dfs(root.right, arr);
  }
  dfs(root1, arr1);
  dfs(root2, arr2);
  return arr1.join() === arr2.join();
};