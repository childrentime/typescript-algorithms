export function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const arr: string[][] = new Array(numRows).fill(0).map(() => []);
  let index = 0;
  let flag = false;
  for (let i = 0; i < s.length; i++) {
    if (!flag && index === numRows - 1) {
      flag = true;
    } else if (flag && index === 0) {
      flag = false;
    }
    const char = s[i]!;
    arr[index]!.push(char);
    if (!flag) {
      index++;
    } else {
      index--;
    }
  }
  return arr.reduce((cur, next) => cur + next.join(''), '');
}
