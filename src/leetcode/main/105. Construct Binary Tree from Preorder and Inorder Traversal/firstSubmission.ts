import TreeNode from './TreeNode';

export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (!preorder.length) {
    return null;
  }
  const val = preorder[0]!;
  const root = new TreeNode(val);
  const index = inorder.indexOf(val);
  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1);
  const leftPreorder = preorder.slice(1, index + 1);
  const rightPreorder = preorder.slice(index + 1);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);
  return root;
}
