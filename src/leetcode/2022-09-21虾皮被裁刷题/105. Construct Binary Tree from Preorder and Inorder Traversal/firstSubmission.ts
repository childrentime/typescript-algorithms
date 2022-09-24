export default function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (!preorder.length) {
    return null;
  }
  const root = preorder[0]!;
  const index = inorder.indexOf(root);

  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1);

  const leftPreorder = preorder.slice(1, index + 1);
  const rightPreorder = preorder.slice(index + 1);

  const node = new TreeNode(root);

  node.left = buildTree(leftPreorder, leftInorder);
  node.right = buildTree(rightPreorder, rightInorder);

  return node;
}
