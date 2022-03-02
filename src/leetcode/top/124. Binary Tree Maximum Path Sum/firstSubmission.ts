import TreeNode from './TreeNode';

// 二叉树的最大路径和 = 根节点+左子树最大贡献+右子树最大贡献
// 子树的最大贡献 = Math.max(左子子树的节点+右子子树)+根
export function maxPathSum(root: TreeNode | null): number {
  let max = -Infinity;
  if (!root) {
    return 0;
  }

  const gain = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }
    const left = Math.max(gain(node.left), 0);
    const right = Math.max(gain(node.right), 0);

    max = Math.max(max, left + right + node.val);
    return Math.max(left, right) + node.val;
  };

  gain(root);

  return max;
}
