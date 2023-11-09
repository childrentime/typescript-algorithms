export default function diameterOfBinaryTree(root: TreeNode | null): number {
  let answer = 0;
  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    answer = Math.max(answer, left + right);

    return Math.max(left, right) + 1;
  };

  dfs(root);

  return answer;
}
