export default function isValidBST(root: TreeNode | null): boolean {
  const stack: TreeNode[] = [];
  const arr: number[] = [];

  while (root || stack.length !== 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop()!;
    arr.push(root.val);
    root = root.right;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i]! <= arr[i - 1]!) {
      return false;
    }
  }

  return true;
}
