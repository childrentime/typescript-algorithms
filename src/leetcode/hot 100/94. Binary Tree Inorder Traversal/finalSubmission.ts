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

export function inorderTraversal(root: TreeNode | null): number[] {
  const answer: number[] = [];
  const stack: TreeNode[] = [];

  while (root || stack.length !== 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop()!;
    answer.push(root.val);
    root = root.right;
  }

  return answer;
}
