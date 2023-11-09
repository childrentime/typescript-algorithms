export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const n = nums1.length + nums2.length;

  return (
    (findK(nums1, nums2, n >>> 1) + findK(nums1, nums2, (n - 1) >>> 1)) / 2
  );
}

const findK = (arr1: number[], arr2: number[], k: number): number => {
  if (!arr1.length) {
    return arr2[k]!;
  }
  if (!arr2.length) {
    return arr1[k]!;
  }

  const len1 = arr1.length >>> 1;
  const len2 = arr2.length >>> 1;
  const item1 = arr1[len1]!;
  const item2 = arr2[len2]!;

  if (len1 + len2 < k) {
    if (item1 > item2) {
      return findK(arr1, arr2.slice(len2 + 1), k - len2 - 1);
    } else {
      return findK(arr1.slice(len1 + 1), arr2, k - len1 - 1);
    }
  } else {
    if (item1 > item2) {
      return findK(arr1.slice(0, len1), arr2, k);
    } else {
      return findK(arr1, arr2.slice(0, len2), k);
    }
  }
};
