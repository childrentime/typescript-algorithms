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

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
  const res: (number | string)[] = [];
  const queue: (TreeNode | null)[] = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      res.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      res.push('x');
    }
  }

  return res.join(',');
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  if (data === 'x') {
    return null;
  }
  const list = data.split(',');
  const root = new TreeNode(Number(list[0]));
  const queue = [root];
  let point = 1;
  while (point < list.length) {
    const node = queue.shift()!;
    const leftVal = list[point];
    const rightVal = list[point + 1];
    if (leftVal !== 'x') {
      const leftNode = new TreeNode(Number(leftVal));
      node.left = leftNode;
      queue.push(leftNode);
    }
    if (rightVal !== 'x') {
      const rightNode = new TreeNode(Number(rightVal));
      node.right = rightNode;
      queue.push(rightNode);
    }
    point += 2;
  }

  return root;
}
