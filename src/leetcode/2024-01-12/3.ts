export function lengthOfLongestSubstring(s: string): number {
  if (!s.length) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  let max = 1;
  const set = new Set<string>();
  set.add(s[0]!);
  let left = 0;
  let right = 0;
  while (right + 1 < s.length && left <= right) {
    right++;
    const num = s[right]!;
    if (!set.has(num)) {
      set.add(num);
      max = Math.max(max, set.size);
    } else {
      while (s[left] !== num) {
        const l = s[left]!;
        if (set.has(l)) {
          set.delete(l);
        }
        left++;
      }
      left++;
    }
  }
  return max;
}

lengthOfLongestSubstring('bbbbb');
