import TreeNode from './TreeNode';

export function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const queue: TreeNode[] = [root];
  let answer = 0;
  while (queue.length) {
    const node: TreeNode[] = [];
    while (queue.length) {
      node.push(queue.shift()!);
    }
    for (const n of node) {
      if (n.left) {
        queue.push(n.left);
      }
      if (n.right) {
        queue.push(n.right);
      }
    }
    answer++;
  }
  return answer;
}
