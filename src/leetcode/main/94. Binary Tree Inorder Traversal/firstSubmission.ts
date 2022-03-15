import TreeNode from './TreeNode';

export function inorderTraversal(root: TreeNode | null): number[] {
  const answer: number[] = [];
  const stack = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop()!;
    answer.push(node.val);
    root = node.right;
  }
  return answer;
}
