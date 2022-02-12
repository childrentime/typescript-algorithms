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

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let answer = 1;
  const depth = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }
    const l = depth(root.left);
    const r = depth(root.right);
    answer = Math.max(answer, l + r + 1);
    return Math.max(l, r) + 1;
  };

  depth(root);
  return answer - 1;
}
