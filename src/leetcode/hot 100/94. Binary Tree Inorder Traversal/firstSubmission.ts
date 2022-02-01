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
  const helper = (root: TreeNode | null): void => {
    if (!root) {
      return;
    }
    helper(root.left);
    answer.push(root.val);
    helper(root.right);
  };

  helper(root);

  return answer;
}
