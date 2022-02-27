/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let point1 = m - 1;
  let point2 = n - 1;
  let tail = m + n - 1;
  let current;
  while (point1 >= 0 || point2 >= 0) {
    if (point1 === -1) {
      current = nums2[point2];
      point2--;
    } else if (point2 === -1) {
      current = nums1[point1];
      point1--;
    } else if (nums1[point1]! > nums2[point2]!) {
      current = nums1[point1];
      point1--;
    } else {
      current = nums2[point2];
      point2--;
    }
    nums1[tail] = current!;
    tail--;
  }
}
