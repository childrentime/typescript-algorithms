import TreeNode from './TreeNode';

export function levelOrder(root: TreeNode | null): number[][] {
  const answer: number[][] = [];
  if (!root) {
    return [];
  }
  const queue: TreeNode[] = [root];
  while (queue.length) {
    let temp: TreeNode[] = [];
    let tempAnswer: number[] = [];
    while (queue.length) {
      const node = queue.shift()!;
      temp.push(node);
      tempAnswer.push(node.val);
    }
    answer.push(tempAnswer);
    for (const node of temp) {
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
