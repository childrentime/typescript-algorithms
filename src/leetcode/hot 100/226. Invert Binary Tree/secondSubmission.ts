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

import TreeNode from './TreeNode';

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const dfs = (node: TreeNode) => {
    [node.left, node.right] = [node.right, node.left];
    if (node.left) {
      dfs(node.left);
    }
    if (node.right) {
      dfs(node.right);
    }
  };
  dfs(root);
  return root;
}
