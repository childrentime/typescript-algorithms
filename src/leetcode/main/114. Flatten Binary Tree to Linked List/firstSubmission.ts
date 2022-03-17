import TreeNode from './TreeNode';

export function flatten(root: TreeNode | null): void {
  let pre: TreeNode | null = null;
  if (!root) {
    return;
  }
  const stack: TreeNode[] = [root];
  while (stack.length) {
    const cur = stack.pop()!;
    if (pre) {
      pre.left = null;
      pre.right = cur;
    }
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }

    pre = cur;
  }
}
