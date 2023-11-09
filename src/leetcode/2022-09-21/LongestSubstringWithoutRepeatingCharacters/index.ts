// 滑动窗口
export default function lengthOfLongestSubstring(s: string): number {
  let first = 0;
  let end = 0;
  let max = 0;
  const set = new Set<string>();
  while (end < s.length) {
    if (!set.has(s[end]!)) {
      set.add(s[end]!);
      end++;
    } else {
      while (set.has(s[end]!)) {
        set.delete(s[first]!);
        first++;
      }
    }
    max = Math.max(max, end - first);
  }
  return max;
}
