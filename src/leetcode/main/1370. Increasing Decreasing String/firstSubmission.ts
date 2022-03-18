export function sortString(s: string): string {
  const nums: number[] = new Array(26).fill(0);
  for (const char of s) {
    const v = char.charCodeAt(0) - 'a'.charCodeAt(0);
    nums[v]++;
  }
  let result = '';
  while (result.length < s.length) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        result += String.fromCharCode(i + 'a'.charCodeAt(0));
        nums[i]--;
      }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] !== 0) {
        result += String.fromCharCode(i + 'a'.charCodeAt(0));
        nums[i]--;
      }
    }
  }
  return result;
}
