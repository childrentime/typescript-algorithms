// 125 =  25+5+1
// 25 = 5+1
// 5 = 1
// 统计阶乘结果中5的贡献
export function trailingZeroes(n: number): number {
  let count = 0;
  while (n > 0) {
    n = ~~(n / 5);
    count += n;
  }
  return count;
}
