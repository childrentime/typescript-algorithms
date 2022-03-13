export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let index = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    if (m >= 0 && nums1[m]! > nums2[n]!) {
      nums1[index] = nums1[m]!;
      index--;
      m--;
    } else {
      nums1[index] = nums2[n]!;
      index--;
      n--;
    }
  }
}
