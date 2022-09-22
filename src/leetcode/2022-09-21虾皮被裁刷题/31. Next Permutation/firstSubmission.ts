export default function nextPermutation(nums: number[]): void {
  const n = nums.length;
  for (let i = n - 2; n >= 0; i--) {
    if (nums[i]! >= nums[i + 1]!) {
      continue;
    } else {
      for (let j = n - 1; j >= 0; j--) {
        if (nums[j]! > nums[i]!) {
          [nums[i], nums[j]] = [nums[j]!, nums[i]!];
          i++;
          j = n - 1;
          while (i < j) {
            [nums[i], nums[j]] = [nums[j]!, nums[i]!];
            i++;
            j--;
          }
          return;
        }
      }
    }
  }

  nums = nums.sort((a, b) => a - b);
}
