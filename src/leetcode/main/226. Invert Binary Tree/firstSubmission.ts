import TreeNode from './TreeNode';

export function invertTree(root: TreeNode | null): TreeNode | null {
  const dfs = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    [root.left, root.right] = [root.right, root.left];
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);

  return root;
}
