export function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const dfs = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    result.push(root.val);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return result;
}
