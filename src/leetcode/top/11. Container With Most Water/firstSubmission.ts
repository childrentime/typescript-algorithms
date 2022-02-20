function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    if (height[left]! < height[right]!) {
      max = Math.max(max, height[left]! * (right - left));
      left++;
    } else {
      max = Math.max(max, height[right]! * (right - left));
      right--;
    }
  }
  return max;
}
