import TreeNode from './TreeNode';

export function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  const queue: (TreeNode | null)[] = [root.left, root.right];
  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();

    if (!left && !right) {
      continue;
    }
    if (!left || !right) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }

    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }
  return true;
}
