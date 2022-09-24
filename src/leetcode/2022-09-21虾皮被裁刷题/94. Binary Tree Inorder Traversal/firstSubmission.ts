export default function inorderTraversal(root: TreeNode | null): number[] {
  const answer: number[] = [];
  const stack: TreeNode[] = [];

  while (root || stack.length !== 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop()!;
    answer.push(root.val);
    root = root.right;
  }

  return answer;
}
