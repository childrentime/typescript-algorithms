export function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  let flagLeft = false;
  let flagRight = false;
  const result = [];
  while (left <= right) {
    if (!flagLeft) {
      if (nums[left] === target) {
        result.push(left);
        flagLeft = true;
      } else {
        left++;
      }
    }

    if (!flagRight) {
      if (nums[right] === target) {
        result.push(right);
        flagRight = true;
      } else {
        right--;
      }
    }

    if (flagLeft && flagRight) {
      break;
    }
  }

  if (!flagLeft) {
    return [-1, -1];
  } else {
    return result;
  }
}
