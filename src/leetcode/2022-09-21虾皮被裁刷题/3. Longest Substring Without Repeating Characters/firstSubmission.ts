export default function lengthOfLongestSubstring(s: string): number {
  const set = new Set();
  let max = 0;

  let left = 0;
  let right = 0;

  while (right < s.length) {
    const char = s[right];
    if (set.has(char)) {
      max = Math.max(max, set.size);
      while (s[left] !== char) {
        set.delete(s[left]);
        left++;
      }
      left++;
    } else {
      set.add(char);
    }
    right++;
  }

  max = Math.max(max, set.size);

  return max;
}
