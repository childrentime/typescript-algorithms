export default function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const queue: TreeNode[] = [root];

  while (queue.length) {
    const node = queue.pop()!;
    [node.left, node.right] = [node.right, node.left];

    if (node.left) {
      queue.unshift(node.left);
    }
    if (node.right) {
      queue.unshift(node.right);
    }
  }

  return root;
}
