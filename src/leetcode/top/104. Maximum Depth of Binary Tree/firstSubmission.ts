import TreeNode from './TreeNode';

export function maxDepth(root: TreeNode | null): number {
  const helper = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }

    const depthl = helper(root.left);
    const depthr = helper(root.right);

    return Math.max(depthr, depthl) + 1;
  };

  return helper(root);
}
