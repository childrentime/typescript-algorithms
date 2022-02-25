function mySqrt(x: number): number {
  if (x === 1) {
    return x;
  }
  let left = 0;
  let right = x >>> 1;
  while (left <= right) {
    let mid = left + ((right - left) >>> 1);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
