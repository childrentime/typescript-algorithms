export function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left <= right) {
    const numLeft = height[left]!;
    const numRight = height[right]!;
    max = Math.max((right - left) * Math.min(numLeft, numRight), max);
    if (numLeft < numRight) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
