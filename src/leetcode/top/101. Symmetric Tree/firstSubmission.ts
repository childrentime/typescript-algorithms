import TreeNode from './TreeNode';

export function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  const queue: (TreeNode | null)[] = [];
  queue.push(root.left);
  queue.push(root.right);

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
