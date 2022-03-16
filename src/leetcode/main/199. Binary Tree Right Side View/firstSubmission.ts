import TreeNode from './TreeNode';

export function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const queue: TreeNode[] = [root];
  const answer: number[] = [];
  while (queue.length) {
    const levelNode: TreeNode[] = [];
    while (queue.length) {
      if (queue.length === 1) {
        answer.push(queue[0]!.val);
      }
      const node = queue.shift()!;

      levelNode.push(node);
    }
    for (const node of levelNode) {
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
