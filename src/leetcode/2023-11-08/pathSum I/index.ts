export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  if (root.left === null && root.right === null) {
    return root.val === targetSum;
  }

  return (
    hasPathSum(root.right, targetSum - root.val) ||
    hasPathSum(root.left, targetSum - root.val)
  );
}
