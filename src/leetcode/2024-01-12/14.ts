export function longestCommonPrefix(strs: string[]): string {
  let result = '';
  if (!strs.length) {
    return result;
  }
  const first = strs[0]!;
  for (let i = 0; i < first.length; i++) {
    const char = first[i]!;
    for (const str of strs) {
      if (str[i] !== char) {
        return result;
      }
    }
    result = result + char;
  }
  return result;
}
