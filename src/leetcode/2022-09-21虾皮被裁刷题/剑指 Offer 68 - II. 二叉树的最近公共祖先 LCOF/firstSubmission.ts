class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) {
    return null;
  }
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

  dfs(root);

  const arr: TreeNode[] = [p];
  let parent = map.get(p);
  while (parent) {
    arr.push(parent);
    parent = map.get(parent);
  }
  while (q) {
    if (arr.includes(q)) {
      return q;
    }
    q = map.get(q) || null;
  }

  return null;
}
