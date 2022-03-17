import TreeNode from './TreeNode';

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let answer = 0;
  const bfs = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }
    const left = bfs(root.left);
    const right = bfs(root.right);
    answer = Math.max(answer, 1 + left + right);
    return Math.max(left, right) + 1;
  };

  bfs(root);
  return answer;
}
