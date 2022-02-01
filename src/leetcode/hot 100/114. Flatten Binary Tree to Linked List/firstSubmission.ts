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
  const list: TreeNode[] = [];
  const stack = [];
  while (root || stack.length !== 0) {
    while (root) {
      stack.push(root);
      list.push(root);
      root = root.left;
    }

    root = stack.pop()!;
    root = root.right;
  }

  for (let i = 1; i < list.length; i++) {
    const pre = list[i - 1]!;
    const cur = list[i]!;
    pre.left = null;
    pre.right = cur;
  }
}
