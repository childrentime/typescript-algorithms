// 中心拓展 单个字母为中心 比如bab 两个字母为中心 比如 abba 中心是bb
// expand(i,i) expand(i,i+1)
export function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s;
  }
  let max = s[0]!;
  for (let i = 1; i < s.length; i++) {
    let curr = i;
    let sym = 1;
    while (curr + sym < s.length && s[curr - sym] === s[curr + sym]) {
      if (1 + sym * 2 > max.length) {
        max = s.slice(curr - sym, curr + sym + 1);
      }
      sym++;
    }
  }
  for (let i = 1; i < s.length; i++) {
    let curr = i;
    let sym = 1;
    let double = 0;
    // abba
    if (i + 1 < s.length && s[i] === s[i + 1]) {
      double = 1;
      if (2 > max.length) {
        max = s.slice(i, i + 2);
      }
    }
    while (
      curr + sym + double < s.length &&
      s[curr - sym] === s[curr + sym + double]
    ) {
      if (1 + sym * 2 + double > max.length) {
        max = s.slice(curr - sym, curr + sym + 1 + double);
      }
      sym++;
    }
  }
  return max;
}
