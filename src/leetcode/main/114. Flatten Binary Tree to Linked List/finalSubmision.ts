import TreeNode from './TreeNode';

export function flatten(root: TreeNode | null): void {
  while (root) {
    if (root.left) {
      let node = root.left;
      while (node.right) {
        node = node.right;
      }
      node.right = root.right;
      root.right = root.left;
      root.left = null;
    }
    root = root.right;
  }
}
