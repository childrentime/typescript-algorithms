const findK = (arr1: number[], arr2: number[], k: number): number => {
  const len1 = arr1.length;
  const len2 = arr2.length;
  let index1 = 0;
  let index2 = 0;
  while (true) {
    if (index1 === len1) {
      return arr2[index2 + k - 1]!;
    }
    if (index2 === len2) {
      return arr1[index1 + k - 1]!;
    }
    if (k === 1) {
      return Math.min(arr1[index1]!, arr2[index2]!);
    }
    const half = ~~(k / 2);
    const newIndex1 = Math.min(index1 + half, len1) - 1;
    const newIndex2 = Math.min(index2 + half, len2) - 1;
    const item1 = arr1[newIndex1]!;
    const item2 = arr2[newIndex2]!;
    if (item1 <= item2) {
      // 缩小k
      k -= newIndex1 - index1 + 1;
      // 舍弃 arr1的前半部分 他们都比k小
      index1 = newIndex1 + 1;
    } else {
      k -= newIndex2 - index2 + 1;
      index2 = newIndex2 + 1;
    }
  }
};
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const n = nums1.length + nums2.length;
  if (n & 1) {
    return findK(nums1, nums2, (n >>> 1) + 1);
  }
  return (
    (findK(nums1, nums2, n >>> 1) + findK(nums1, nums2, (n >>> 1) + 1)) / 2
  );
}
