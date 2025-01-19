/**
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
export function lengthOfLongestSubstring(s: string): number {
  const n = s.length;
  let left = 0;
  let right = 0;
  let result = 0;
  const set = new Set<string>();
  while (right < n) {
    while (set.has(s[right]!)) {
      result = Math.max(result, set.size);
      set.delete(s[left]!);
      left++;
    }
    set.add(s[right]!);
    right++;
  }
  result = Math.max(result, set.size);
  return result;
}

console.log(lengthOfLongestSubstring('bbbbb'));
