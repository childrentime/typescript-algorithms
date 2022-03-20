import TreeNode from './TreeNode';

export function pathSum(root: TreeNode | null, targetSum: number): number {
  const dfs = (node: TreeNode | null, target: number): number => {
    if (!node) {
      return 0;
    }
    let ret = 0;
    if (node.val === target) {
      ret++;
    }

    ret += dfs(node.left, target - node.val);
    ret += dfs(node.right, target - node.val);
    return ret;
  };

  if (!root) {
    return 0;
  }
  let ret = dfs(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
}
