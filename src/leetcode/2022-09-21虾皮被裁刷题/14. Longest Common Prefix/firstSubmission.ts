export default function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0]!;
  }

  let result = strs[0]!;
  let len = 0;
  loop: while (len < result.length) {
    for (const str of strs) {
      if (str[len] !== result[len]) {
        break loop;
      }
    }
    len++;
  }

  return result.substring(0, len);
}
