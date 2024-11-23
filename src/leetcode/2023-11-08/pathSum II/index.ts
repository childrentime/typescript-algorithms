export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const answer: number[][] = [];
  const dfs = (root: TreeNode | null, target: number, output: number[]) => {
    if (!root) {
      return;
    }

    if (root.left === null && root.right === null) {
      if (root.val === target) {
        answer.push([...output, root.val]);
        return;
      }
    }

    dfs(root.left, target - root.val, [...output, root.val]);
    dfs(root.right, target - root.val, [...output, root.val]);
  };

  dfs(root, targetSum, []);

  return answer;
}
