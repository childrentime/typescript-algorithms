//aabbcc
export function compressString(s: string): string {
  let result = s[0]!;
  let sum = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      sum++;
    } else {
      result += sum.toString();
      result += s[i]!;
      sum = 1;
    }
  }
  result += sum.toString();
  return result.length > s.length ? s : result;
}
