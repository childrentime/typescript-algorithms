import TreeNode from './TreeNode';

// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const root = new TreeNode(preorder[0]);
  let inindex = 0;
  const stack: TreeNode[] = [root];
  for (let i = 1; i < preorder.length; i++) {
    let node = stack[stack.length - 1]!;
    let preVal = preorder[i];
    if (stack[stack.length - 1]!.val !== inorder[inindex]) {
      node.left = new TreeNode(preVal);
      stack.push(node.left);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1]!.val === inorder[inindex]
      ) {
        node = stack.pop()!;
        inindex++;
      }
      node.right = new TreeNode(preVal);
      stack.push(node.right);
    }
  }

  return root;
}
