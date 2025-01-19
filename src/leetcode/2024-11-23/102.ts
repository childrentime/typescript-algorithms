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

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) {
    return [];
  }
  const queue: (TreeNode | null)[] = [root];
  while (queue.length) {
    const nodes: TreeNode[] = [];
    const level: number[] = [];
    while (queue.length) {
      const node = queue.shift();
      if (node) {
        nodes.push(node);
        level.push(node.val);
      }
    }
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }
    result.push(level);
  }
  return result;
}
