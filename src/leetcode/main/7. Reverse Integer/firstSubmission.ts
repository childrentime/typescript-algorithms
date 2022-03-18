export function reverse(x: number): number {
  const limit = 2 ** 31;
  let nagtive = false;
  if (x < 0) {
    x = -x;
    nagtive = true;
  }
  const result = Number(x.toString().split('').reverse().join(''));
  if (result > limit) {
    return 0;
  }
  return nagtive ? -result : result;
}
