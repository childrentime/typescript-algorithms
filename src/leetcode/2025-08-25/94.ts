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

// 左 根 右
export function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  const stack: TreeNode[] = [];
  const result: number[] = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop()!;
    result.push(root.val);
    root = root.right;
  }
  return result;
};