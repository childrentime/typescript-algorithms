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

export function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const queue = [root];
  let answer = 0;
  while (queue.length !== 0) {
    let tem: TreeNode[] = [];
    while (queue.length !== 0) {
      tem.push(queue.shift()!);
    }
    for (const item of tem) {
      if (item.left) {
        queue.push(item.left);
      }
      if (item.right) {
        queue.push(item.right);
      }
    }

    answer++;
  }

  return answer;
}
