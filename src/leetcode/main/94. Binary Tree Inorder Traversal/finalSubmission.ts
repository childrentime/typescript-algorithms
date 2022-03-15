import TreeNode from './TreeNode';

export function inorderTraversal(root: TreeNode | null): number[] {
  const answer: number[] = [];
  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    answer.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return answer;
}
