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
  let head = root;
  const queue: TreeNode[] = [head];
  while (queue.length) {
    const node = queue.shift()!;
    [node.left, node.right] = [node.right, node.left];
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return root;
}
