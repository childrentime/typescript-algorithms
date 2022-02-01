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

export function isSymmetric(root: TreeNode | null): boolean {
  const helper = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right) {
      return true;
    }
    if (!left || !right) {
      return false;
    }

    if (left.val === right.val) {
      return helper(left.left, right.right) && helper(left.right, right.left);
    } else {
      return false;
    }
  };

  return helper(root, root);
}
