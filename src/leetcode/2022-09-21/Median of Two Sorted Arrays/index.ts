export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const nums = [];
  nums.push(...nums1, ...nums2);
  nums.sort((a, b) => a - b);
  if (nums.length % 2 === 0) {
    return (
      (nums[nums.length / 2]! + Math.floor(nums[nums.length - 1 / 2]!)) / 2
    );
  } else {
    return nums[Math.floor(nums.length / 2)]!;
  }
}
