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

// 递归地寻找每个节点的最大贡献度 其中更新可能出现的最大路径
// Recursively find the maximum contribution of each node where the maximum possible path for the update
export function maxPathSum(root: TreeNode | null): number {
  let answer = -Infinity;
  const helper = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }
    const leftGain = Math.max(0, helper(root.left));
    const rightGain = Math.max(0, helper(root.right));
    answer = Math.max(answer, leftGain + rightGain + root.val);

    return root.val + Math.max(leftGain, rightGain);
  };

  helper(root);

  return answer;
}
