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

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const map = new Map<TreeNode, TreeNode>();
  let head = root;
  const queue = [head];
  while (queue.length) {
    const node = queue.shift()!;
    if (node.left) {
      map.set(node.left, node);
      queue.push(node.left);
    }
    if (node.right) {
      map.set(node.right, node);
      queue.push(node.right);
    }
  }
  const visited: TreeNode[] = [];
  while (p) {
    visited.push(p);
    const parent = map.get(p) ?? null;
    p = parent;
  }
  while (q) {
    if (~visited.indexOf(q)) {
      return q;
    }
    const parent = map.get(q) ?? null;
    q = parent;
  }

  return null;
}
