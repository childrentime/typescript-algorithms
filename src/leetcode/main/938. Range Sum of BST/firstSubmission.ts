import TreeNode from './TreeNode';

export function rangeSumBST(
  root: TreeNode | null,
  low: number,
  high: number
): number {
  if (!root) {
    return 0;
  }
  const stack: TreeNode[] = [];
  const answer: number[] = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop()!;
    answer.push(node.val);
    root = node.right;
  }
  let start = answer.indexOf(low);
  let end = answer.indexOf(high);
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += answer[i]!;
  }
  return result;
}
