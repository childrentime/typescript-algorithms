import TreeNode from './TreeNode';

export function maxDepth(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    return Math.max(left, right) + 1;
  };

  return dfs(root);
}
