import TreeNode from './TreeNode';

export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const answer: number[][] = [];
  const dfs = (root: TreeNode | null, targetSum: number, output: number[]) => {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      if (root.val === targetSum) {
        output.push(root.val);
        answer.push(output);
      }
      return;
    }

    dfs(root.left, targetSum - root.val, [...output, root.val]);
    dfs(root.right, targetSum - root.val, [...output, root.val]);
  };

  dfs(root, targetSum, []);

  return answer;
}
