export function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  let count = 0;
  for (const num1 of nums1) {
    for (const num2 of nums2) {
      for (const num3 of nums3) {
        for (const num4 of nums4) {
          if (num1 + num2 + num3 + num4 === 0) {
            count++;
          }
        }
      }
    }
  }
  return count;
}
