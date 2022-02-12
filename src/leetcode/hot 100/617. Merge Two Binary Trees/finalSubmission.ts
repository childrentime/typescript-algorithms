import TreeNode from './TreeNode';

export function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1) {
    return root2;
  }
  if (!root2) {
    return root1;
  }
  const merged = new TreeNode(root1.val + root2.val);
  merged.left = mergeTrees(root1.left, root2.left);
  merged.right = mergeTrees(root1.right, root2.right);
  return merged;
}
