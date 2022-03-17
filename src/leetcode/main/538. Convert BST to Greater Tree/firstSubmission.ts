import TreeNode from './TreeNode';

export function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0;

  const bfs = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    bfs(root.right);
    sum += root.val;
    root.val = sum;
    bfs(root.left);
  };

  bfs(root);
  return root;
}
