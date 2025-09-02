/**
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
export function lengthOfLongestSubstring(s: string): number {
  let result = 0;
  const set = new Set();
  let left = 0;
  let right = 0;
  while (right < s.length) {
    const char = s[right];
    if (set.has(char)) {
      while (left < right && set.has(char)) {
        const l = s[left];
        set.delete(l)
        left++;
      }
    }
    set.add(char);
    result = Math.max(result, set.size)
    right++;
  }
  return result;
};

console.log(lengthOfLongestSubstring('aab'))