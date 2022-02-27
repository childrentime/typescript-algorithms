import TreeNode from './TreeNode';

export function inorderTraversal(root: TreeNode | null): number[] {
  const answer: number[] = [];

  const helper = (root: TreeNode | null): void => {
    if (!root) {
      return;
    }

    helper(root.left);
    answer.push(root.val);
    helper(root.right);
  };

  helper(root);

  return answer;
}
