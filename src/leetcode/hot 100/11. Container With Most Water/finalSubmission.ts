export function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let v;
    if (height[left]! < height[right]!) {
      v = height[left]! * (right - left);
      left++;
    } else {
      v = height[right]! * (right - left);
      right--;
    }
    if (v > max) max = v;
  }

  return max;
}
