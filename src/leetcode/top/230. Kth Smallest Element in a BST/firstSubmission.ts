import TreeNode from './TreeNode';

export function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) {
    return 0;
  }
  const stack: TreeNode[] = [];
  let count = 0;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop()!;
    count++;
    if (count === k) {
      return root.val;
    }
    root = root.right;
  }

  throw new Error('no answer');
}
