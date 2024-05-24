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
var longestZigZag = function(root) {
  let answer = 0;

  function dfs(node, left, cnt) {
    if(!node) return;

    answer = Math.max(answer, cnt);

    if(left) {
      node.left && dfs(node.left, !left, cnt + 1);
      node.right && dfs(node.right, left, 1);
    } else {
      node.right && dfs(node.right, !left, cnt + 1);
      node.left && dfs(node.left, left, 1);
    }
  }

  dfs(root, true, 0);
  dfs(root, false, 0);

  return answer;
};