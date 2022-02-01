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

// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]44
export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }
  const root = preorder[0]!;
  const node = new TreeNode(root);

  const leftIn = inorder.slice(0, inorder.indexOf(root));
  const rightIn = inorder.slice(inorder.indexOf(root) + 1, inorder.length);

  const leftPre = preorder.slice(1, 1 + leftIn.length);
  const rightPre = preorder.slice(1 + leftIn.length, preorder.length);

  node.left = buildTree(leftPre, leftIn);
  node.right = buildTree(rightPre, rightIn);

  return node;
}
