import TreeNode from './TreeNode';

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const map = new Map<TreeNode, TreeNode>();
  const dfs = (node: TreeNode) => {
    if (node.left) {
      map.set(node.left, node);
      dfs(node.left);
    }
    if (node.right) {
      map.set(node.right, node);
      dfs(node.right);
    }
  };
  if (!root) {
    return null;
  }
  dfs(root);
  if (!p) {
    return null;
  }
  if (!q) {
    return null;
  }
  const arr: TreeNode[] = [root];
  while (p !== root) {
    arr.push(p);
    p = map.get(p)!;
  }
  while (q) {
    if (arr.includes(q)) {
      return q;
    }
    q = map.get(q)!;
  }
  return null;
}
