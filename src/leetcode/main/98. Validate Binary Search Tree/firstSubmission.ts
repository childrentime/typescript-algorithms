import TreeNode from './TreeNode';

export function isValidBST(root: TreeNode | null): boolean {
  const stack: TreeNode[] = [];
  let min = -Infinity;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop()!;
    if (node.val <= min) {
      return false;
    }
    min = node.val;
    root = node.right;
  }
  return true;
}
