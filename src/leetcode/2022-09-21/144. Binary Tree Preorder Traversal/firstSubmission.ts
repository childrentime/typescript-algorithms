export default function preorderTraversal(root: TreeNode | null): number[] {
  const answer: number[] = [];

  const stack: TreeNode[] = [];

  while (root || stack.length !== 0) {
    while (root) {
      answer.push(root.val);
      stack.push(root);
      root = root.left;
    }

    root = stack.pop()!;
    root = root.right;
  }

  return answer;
}
