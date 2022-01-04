export function maxArea(height: number[]): number {
  let max = 0;
  const stateArr = [height[0]];
  for (let i = 1; i < height.length; i++) {
    for (let j = 0; j < stateArr.length; j++) {
      if (height[i]! * (i - j) <= max) {
        break;
      }
      const value = Math.min(height[i]!, stateArr[j]!) * (i - j);
      if (value > max) max = value;
    }
    stateArr.push(height[i]);
  }

  return max;
}
