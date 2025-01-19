/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export function isValidBST(root: TreeNode | null): boolean {
  const result: number[] = [];
  const dfs = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    dfs(root.left);
    result.push(root.val);
    dfs(root.right);
  };
  dfs(root);
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i]! >= result[i + 1]!) {
      return false;
    }
  }
  return true;
}
