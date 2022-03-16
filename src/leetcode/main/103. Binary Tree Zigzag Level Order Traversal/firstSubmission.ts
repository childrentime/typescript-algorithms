import TreeNode from './TreeNode';

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const answer: number[][] = [];
  let flag = false;
  if (!root) {
    return [];
  }
  const queue: TreeNode[] = [root];
  while (queue.length) {
    let levelnode: TreeNode[] = [];
    let levelAnswer: number[] = [];
    while (queue.length) {
      const node = queue.shift()!;
      levelnode.push(node);
      if (flag) {
        levelAnswer.unshift(node.val);
      } else {
        levelAnswer.push(node.val);
      }
    }
    answer.push(levelAnswer);
    for (const node of levelnode) {
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    flag = !flag;
  }
  return answer;
}
