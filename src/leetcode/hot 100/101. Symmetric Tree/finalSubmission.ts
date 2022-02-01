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
  if (!root) {
    return true;
  }
  const queue: (TreeNode | null)[] = [];
  queue.unshift(root);
  queue.unshift(root);

  while (queue.length !== 0) {
    const left = queue.shift();
    const right = queue.shift();

    if (!left && !right) {
      continue;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val === right.val) {
      queue.unshift(left.left);
      queue.unshift(right.right);
      queue.unshift(left.right);
      queue.unshift(right.left);
    } else {
      return false;
    }
  }

  return true;
}
