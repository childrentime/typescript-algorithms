export default function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0;

  const bfs = (node: TreeNode | null) => {
    if (!node) {
      return;
    }

    bfs(node.right);
    sum += node.val;
    node.val = sum;
    bfs(node.left);
  };

  bfs(root);

  return root;
}
