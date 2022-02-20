export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0]!;
  }
  let result = strs[0]!;
  let len = 0;
  let flag = true;
  while (len < result.length) {
    for (const str of strs) {
      if (str[len] !== result[len]) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      break;
    }
    len++;
  }
  return result.substring(0, len);
}
