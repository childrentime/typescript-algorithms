import TreeNode from './TreeNode';

export function maxPathSum(root: TreeNode | null): number {
  let answer = -Infinity;

  const bfs = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }

    const left = Math.max(bfs(root.left), 0);
    const right = Math.max(bfs(root.right), 0);

    answer = Math.max(answer, root.val + left + right);

    return Math.max(left, right) + root.val;
  };

  bfs(root);
  return answer;
}
