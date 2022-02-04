// 位运算 计算每一位 0或者1的出现次数
export function majorityElement(nums: number[]): number {
  let n = nums.length;
  let res = 0;
  for (let i = 0; i < 32; i++) {
    let one = 0;
    let zero = 0;
    for (let j = 0; j < n; j++) {
      if (one > n / 2 || zero > n / 2) {
        break;
      }
      if ((nums[j]! & (1 << i)) !== 0) {
        one++;
      } else {
        zero++;
      }
    }
    if (one > zero) {
      res = res | (1 << i);
    }
  }

  return res;
}
