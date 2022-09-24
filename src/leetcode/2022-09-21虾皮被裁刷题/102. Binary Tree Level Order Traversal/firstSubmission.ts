export default function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const answer: number[][] = [];

  let queue: TreeNode[] = [];
  queue.unshift(root);

  while (queue.length) {
    const nodes: TreeNode[] = [];
    const arr: number[] = [];
    while (queue.length) {
      const node = queue.pop()!;
      arr.push(node.val);
      if (node.left) {
        nodes.unshift(node.left);
      }
      if (node.right) {
        nodes.unshift(node.right);
      }
    }

    queue = nodes;
    answer.push(arr);
  }

  return answer;
}
