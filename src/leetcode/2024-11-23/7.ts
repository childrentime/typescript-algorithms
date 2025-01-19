export function reverse(x: number): number {
  const string = String(x);
  const isNegative = string[0] === '-';
  const rest = isNegative ? string.slice(1, string.length) : string;
  const number = Number(rest.split('').reverse().join(''));

  if (number >= 2 ** 31 - 1 || number <= (-2) ** 31) {
    return 0;
  }
  if (isNegative) {
    return -number;
  } else {
    return number;
  }
}
