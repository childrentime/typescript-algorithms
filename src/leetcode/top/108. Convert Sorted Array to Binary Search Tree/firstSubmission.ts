import TreeNode from './TreeNode';

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  const helper = (left: number, right: number): TreeNode | null => {
    if (left > right) {
      return null;
    }
    const mid = left + ((right - left) >>> 1);
    const root = new TreeNode(nums[mid]);
    root.left = helper(left, mid - 1);
    root.right = helper(mid + 1, right);

    return root;
  };

  return helper(0, nums.length - 1);
}
