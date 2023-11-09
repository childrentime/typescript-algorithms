export default function rangeSumBST(
  root: TreeNode | null,
  low: number,
  high: number
): number {
  const arr: number[] = [];
  const dfs = (root: TreeNode | null) => {
    if (!root) {
      return;
    }

    dfs(root.left);
    arr.push(root.val);
    dfs(root.right);
  };

  dfs(root);

  const index1 = arr.indexOf(low);
  const index2 = arr.indexOf(high);

  let result = 0;

  for (let i = index1; i <= index2; i++) {
    result += arr[i]!;
  }

  return result;
}
