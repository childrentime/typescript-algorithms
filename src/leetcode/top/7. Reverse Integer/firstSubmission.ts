export function reverse(x: number): number {
  if (x === 0) {
    return 0;
  }
  let nagtive = false;
  if (x < 0) {
    nagtive = true;
    x = -x;
  }
  const result = Number(String(x).split('').reverse().join(''));
  const limit = 2 ** 31;

  if (result < limit) {
    return nagtive ? -result : result;
  }
  return 0;
}
