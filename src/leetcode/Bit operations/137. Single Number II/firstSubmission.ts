export function singleNumber(nums: number[]): number {
  let answer = 0;
  for (let i = 0; i < 32; i++) {
    let total = 0;
    nums.forEach(item => {
      total += (item >> i) & 1;
    });
    if (total % 3 !== 0) {
      answer |= 1 << i;
    }
  }
  return answer;
}
