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

/**
  Do not return anything, modify root in-place instead.
  */
export function flatten(root: TreeNode | null): void {
  if (!root) {
    return;
  }
  const stack: TreeNode[] = [];
  stack.push(root);
  let pre: TreeNode | null = null;
  while (stack.length) {
    const cur = stack.pop()!;
    if (pre !== null) {
      pre.left = null;
      pre.right = cur;
    }
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }

    pre = cur;
  }
}
