export default function maxDepth(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }

    return Math.max(dfs(node.left), dfs(node.right)) + 1;
  };

  return dfs(root);
}
