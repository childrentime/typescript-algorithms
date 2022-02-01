import TreeNode from './TreeNode';

// 根左右 左根右
// 将根入栈 遍历前序数组 将左结点不停入栈
// 用inIndex 记录中序数组索引，最初的inorder[inIndex]就是最左的节点
// 如果栈顶元素和 inorder[index]相同，我们就不断弹出栈顶，并且让 inIndex++
// 如果不相等了，说明当前遍历到了前序数组的一个右儿子，我们将栈顶的节点的右指针指向它
// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const root = new TreeNode(preorder[0]);

  const stack: TreeNode[] = [];
  stack.push(root);

  let inorderIndex = 0;

  for (let i = 1; i < preorder.length; i++) {
    let preorderVal = preorder[i];
    let node: TreeNode = stack[stack.length - 1]!;
    if (node.val != inorder[inorderIndex]) {
      node.left = new TreeNode(preorderVal);
      stack.push(node.left);
    } else {
      while (
        stack.length !== 0 &&
        stack[stack.length - 1]!.val === inorder[inorderIndex]
      ) {
        node = stack.pop()!;
        inorderIndex++;
      }
      node.right = new TreeNode(preorderVal);
      stack.push(node.right);
    }
  }

  return root;
}
