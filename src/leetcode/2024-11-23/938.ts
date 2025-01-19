export function rangeSumBST(
  root: TreeNode | null,
  low: number,
  high: number
): number {
  const result: number[] = [];
  const dfs = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    if (low <= root.val && root.val <= high) {
      result.push(root.val);
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return result.reduce((pre, cur) => pre + cur, 0);
}
