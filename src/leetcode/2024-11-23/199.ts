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

export function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];
  const queue = [root];
  while (queue.length) {
    const nodes: (TreeNode | null)[] = [];
    while (queue.length) {
      const node = queue.shift()!;
      nodes.push(node);
      if (queue.length === 0 && node) {
        result.push(node.val);
      }
    }
    for (const node of nodes) {
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }
  }
  return result;
}
