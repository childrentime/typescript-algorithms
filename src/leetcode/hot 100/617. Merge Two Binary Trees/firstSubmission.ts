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
  const queue: TreeNode[] = [];
  const queue1: TreeNode[] = [];
  const queue2: TreeNode[] = [];
  queue.push(merged);
  queue1.push(root1);
  queue2.push(root2);
  while (queue1.length && queue2.length) {
    const node = queue.pop()!;
    const node1 = queue1.pop()!;
    const node2 = queue2.pop()!;
    const left1 = node1.left;
    const left2 = node2.left;
    const right1 = node1.right;
    const right2 = node2.right;
    if (left1 || left2) {
      if (left1 && left2) {
        const left = new TreeNode(left1.val + left2.val);
        node.left = left;
        queue.push(left);
        queue1.push(left1);
        queue2.push(left2);
      } else if (left1) {
        node.left = left1;
      } else {
        node.left = left2;
      }
    }
    if (right1 || right2) {
      if (right1 && right2) {
        const right = new TreeNode(right1.val + right2.val);
        node.right = right;
        queue.push(right);
        queue1.push(right1);
        queue2.push(right2);
      } else if (right1) {
        node.right = right1;
      } else {
        node.right = right2;
      }
    }
  }
  return merged;
}
