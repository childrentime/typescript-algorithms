export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    max = Math.max(
      (right - left) * Math.min(height[left]!, height[right]!),
      max
    );
    if (height[left]! < height[right]!) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
