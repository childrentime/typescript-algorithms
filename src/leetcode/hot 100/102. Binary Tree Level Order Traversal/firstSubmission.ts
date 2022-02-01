import TreeNode from './TreeNode';

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const answer: number[][] = [];
  const queue: TreeNode[] = [root];
  while (queue.length !== 0) {
    const gen: number[] = [];
    const tem: TreeNode[] = [];
    while (queue.length !== 0) {
      const node = queue.shift()!;
      gen.push(node.val);
      tem.push(node);
    }
    answer.push(gen);
    for (const item of tem) {
      if (item.left) {
        queue.push(item.left);
      }
      if (item.right) {
        queue.push(item.right);
      }
    }
  }
  return answer;
}
