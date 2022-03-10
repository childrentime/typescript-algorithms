function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  let count = 0;
  const map = new Map<number, number>();
  for (const num1 of nums1) {
    for (const num2 of nums2) {
      if (map.has(num1 + num2)) {
        map.set(num1 + num2, map.get(num1 + num2)! + 1);
      } else {
        map.set(num1 + num2, 1);
      }
    }
  }
  for (const num3 of nums3) {
    for (const num4 of nums4) {
      if (map.has(-num3 - num4)) {
        count = count + map.get(num3 + num4)!;
      }
    }
  }
  return count;
}
