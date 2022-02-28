import TreeNode from './TreeNode';

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const answer: number[][] = [];
  if (!root) {
    return answer;
  }
  const queue: TreeNode[] = [root];
  let reverse: boolean = false;

  while (queue.length) {
    let level: number[] = [];
    let levelnode: TreeNode[] = [];
    while (queue.length) {
      const node: TreeNode = queue.shift()!;
      if (!reverse) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }
      levelnode.push(node);
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
    reverse = !reverse;
  }
  return answer;
}
