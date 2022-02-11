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

// f(node) = g(left)+g(right)+node.val
// g(node) = max{g(left),f(left)}+max(g(right),f(right))
export function rob(root: TreeNode | null): number {
  const f = new Map();
  const g = new Map();

  const dfs = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    dfs(root.left);
    dfs(root.right);
    f.set(root, root.val + (g.get(root.left) || 0) + (g.get(root.right) || 0));
    g.set(
      root,
      Math.max(g.get(root.left) || 0, f.get(root.left) || 0) +
        Math.max(g.get(root.right) || 0, f.get(root.right) || 0)
    );
  };

  dfs(root);

  return Math.max(g.get(root) || 0, f.get(root) || 0);
}
