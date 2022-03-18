// 9876 6789
export function reverse(x: number): number {
  const limit = 2 ** 31;
  let nagtive = false;
  if (x < 0) {
    x = -x;
    nagtive = true;
  }
  let answer = 0;
  while (x) {
    let v = x % 10;
    answer = answer * 10 + v;
    x = ~~(x / 10);
  }
  if (answer > limit) {
    return 0;
  }
  return nagtive ? -answer : answer;
}
