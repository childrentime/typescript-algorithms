export default function maxArea(height: number[]): number {
  const n = height.length;
  let left = 0;
  let right = n - 1;
  let max = 0;

  while (left < right) {
    max = Math.max(
      (right - left) * Math.min(height[left]!, height[right]!),
      max
    );

    if (height[left]! > height[right]!) {
      right--;
    } else {
      left++;
    }
  }

  return max;
}
