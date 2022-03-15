import TreeNode from './TreeNode';

export function preorderTraversal(root: TreeNode | null): number[] {
  const answer: number[] = [];
  const bfs = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    answer.push(node.val);
    bfs(node.left);
    bfs(node.right);
  };
  bfs(root);
  return answer;
}
