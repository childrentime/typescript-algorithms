import TreeNode from './TreeNode';

export function isSymmetric(root: TreeNode | null): boolean {
  const isSame = (l: TreeNode | null, r: TreeNode | null): boolean => {
    if (!l && !r) {
      return true;
    }
    if (!l || !r) {
      return false;
    }
    if (l.val !== r.val) {
      return false;
    }
    return isSame(l.left, r.right) && isSame(l.right, r.left);
  };

  if (!root) {
    return true;
  }
  return isSame(root.left, root.right);
}
