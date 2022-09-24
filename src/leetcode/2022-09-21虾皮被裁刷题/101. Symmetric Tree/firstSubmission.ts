export default function isSymmetric(root: TreeNode | null): boolean {
  const helper = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val === right.val) {
      return helper(left.left, right.right) && helper(left.right, right.left);
    } else {
      return false;
    }
  };

  return helper(root, root);
}
