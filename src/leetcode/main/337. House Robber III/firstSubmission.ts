// r表示打劫 n表示不打劫
// r(root) = root.val+n(root.left)+n(root.right)
// n(root) = r(root.left),n(root.left)   +r(root.right) n(root.right)
import TreeNode from './TreeNode';

export function rob(root: TreeNode | null): number {
  const r = new Map<TreeNode | null, number>();
  const n = new Map<TreeNode | null, number>();
  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    dfs(node.right);
    r.set(node, node.val + (n.get(node.left) || 0) + (n.get(node.right) || 0));
    n.set(
      node,
      Math.max(n.get(node.left) || 0, r.get(node.left) || 0) +
        Math.max(n.get(node.right) || 0, r.get(node.right) || 0)
    );
  };

  dfs(root);

  return Math.max(r.get(root) || 0, n.get(root) || 0);
}
