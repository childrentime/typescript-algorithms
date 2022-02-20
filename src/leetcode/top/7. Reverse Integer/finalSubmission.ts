export function reverse(x: number): number {
  let answer = 0;
  while (x !== 0) {
    const number = x % 10;
    x = ~~(x / 10);
    answer = answer * 10 + number;
    if (answer < (-2) ** 31 || answer >= 2 ** 31) {
      return 0;
    }
  }
  return answer;
}
