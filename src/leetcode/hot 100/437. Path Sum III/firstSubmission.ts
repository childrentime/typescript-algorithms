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

// 对于当前的根结点向下找
const rootSum = (root: TreeNode | null, targetSum: number): number => {
  let ret = 0;
  if (!root) {
    return 0;
  }
  const val = root.val;
  if (val === targetSum) {
    ret++;
  }
  ret += rootSum(root.left, targetSum - val);
  ret += rootSum(root.right, targetSum - val);
  return ret;
};
export function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }
  let ret = rootSum(root, targetSum);
  // 递归寻找左右节点
  ret += pathSum(root.right, targetSum);
  ret += pathSum(root.left, targetSum);
  return ret;
}
