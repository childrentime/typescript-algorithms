export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const mergedArray: number[] = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i]! < nums2[j]!) {
      mergedArray.push(nums1[i]!);
      i++;
    } else {
      mergedArray.push(nums2[j]!);
      j++;
    }
  }
  while (i < nums1.length) {
    mergedArray.push(nums1[i]!);
    i++;
  }
  while (j < nums2.length) {
    mergedArray.push(nums2[j]!);
    j++;
  }
  const length = mergedArray.length / 2;
  if (!Number.isInteger(length)) {
    return mergedArray[Math.floor(length)] as number;
  }

  return (<number>mergedArray[length] + <number>mergedArray[length - 1]) / 2;
}
