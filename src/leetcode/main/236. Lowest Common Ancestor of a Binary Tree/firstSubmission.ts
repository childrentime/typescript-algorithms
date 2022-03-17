import TreeNode from './TreeNode';

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const map = new Map<TreeNode, TreeNode>();
  const dfs = (root: TreeNode) => {
    if (root.left) {
      map.set(root.left, root);
      dfs(root.left);
    }
    if (root.right) {
      map.set(root.right, root);
      dfs(root.right);
    }
  };

  if (!root) {
    return null;
  }
  dfs(root);
  const ancestor: TreeNode[] = [];
  while (p) {
    ancestor.push(p);
    const parent = map.get(p)!;
    p = parent;
  }
  while (q) {
    if (ancestor.indexOf(q) !== -1) {
      return q;
    }
    const parent = map.get(q)!;
    q = parent;
  }
  return null;
}
