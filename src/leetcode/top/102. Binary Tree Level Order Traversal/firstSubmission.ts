import TreeNode from './TreeNode';

export function levelOrder(root: TreeNode | null): number[][] {
  const answer: number[][] = [];
  if (!root) {
    return answer;
  }
  const queue: TreeNode[] = [root];

  while (queue.length) {
    let level: number[] = [];
    let levelnode: TreeNode[] = [];
    while (queue.length) {
      const node = queue.shift()!;
      levelnode.push(node);
      level.push(node.val);
    }
    answer.push(level);
    for (const node of levelnode) {
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return answer;
}
