export function lengthOfLongestSubstring(s: string): number {
  let length = s.length;
  let left = 0;
  let right = 0;
  let max = 0;
  const set = new Set<string>();
  while (right < length) {
    while (set.has(s[right]!)) {
      max = Math.max(max, set.size);
      set.delete(s[left]!);
      left++;
    }
    set.add(s[right]!);
    right++;
  }
  max = Math.max(max, set.size);

  return max;
}
