import TreeNode from './TreeNode';

export function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const answer: number[] = [];
  const stack: TreeNode[] = [root];
  while (stack.length) {
    const cur = stack.pop()!;
    answer.push(cur.val);
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  return answer;
}
