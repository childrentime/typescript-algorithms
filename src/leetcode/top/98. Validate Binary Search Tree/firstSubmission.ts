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

export function isValidBST(root: TreeNode | null): boolean {
  const stack: TreeNode[] = [];
  let recode = -Infinity;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop()!;
    if (recode >= node.val) {
      return false;
    }
    recode = node.val;
    root = node.right;
  }
  return true;
}
