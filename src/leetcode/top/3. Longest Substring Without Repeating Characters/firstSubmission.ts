export function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let max = -Infinity;
  let count = 0;
  let left = 0;
  let right = 0;
  while (right < s.length) {
    if (set.has(s[right]!)) {
      if (max < count) {
        max = count;
      }
      while (left <= right) {
        const l = s[left]!;
        left++;
        count--;
        set.delete(l);

        if (l === s[right]) {
          break;
        }
      }
    }
    set.add(s[right]!);
    count++;
    right++;
  }
  return max > count ? max : count;
}
