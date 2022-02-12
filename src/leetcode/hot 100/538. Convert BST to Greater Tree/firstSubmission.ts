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

// 累加树: 原来的节点值加上所有大于它的节点值之和

export function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0;
  const dfs = (root: TreeNode | null) => {
    if (root) {
      dfs(root.right);
      sum += root.val;
      root.val = sum;
      dfs(root.left);
    }
  };

  dfs(root);

  return root;
}
