// n是偶数 那么一定可以由两个奇数字符串构成 比如 1 n-1
// n是奇数 那么就是n个重复
export function generateTheString(n: number): string {
  let result: string[];
  if (n & 1) {
    result = new Array(n).fill('a');
    return result.join('');
  }
  result = new Array(n - 1).fill('a');
  result.push('b');
  return result.join('');
}
