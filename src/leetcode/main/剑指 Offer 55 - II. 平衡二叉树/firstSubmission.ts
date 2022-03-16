import TreeNode from './TreeNode';

export function isBalanced(root: TreeNode | null): boolean {
  const helper = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }
    const left = helper(node.left);

    if (left === -1) {
      return -1;
    }

    const right = helper(node.right);

    if (right === -1) {
      return -1;
    }

    if (Math.abs(left - right) < 2) {
      return 1 + Math.max(left, right);
    } else {
      return -1;
    }
  };

  return helper(root) !== -1;
}
