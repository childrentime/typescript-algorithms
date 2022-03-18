export function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let left = 0;
  let right = 0;
  let count = 0;
  let answer = 0;
  while (right < s.length) {
    if (set.has(s[right]!)) {
      while (left < right) {
        const item = s[left]!;
        count--;
        left++;
        if (set.has(item)) {
          set.delete(item);
        }
        if (item === s[right]) {
          break;
        }
      }
    }
    set.add(s[right]!);
    count++;
    right++;
    if (count > answer) {
      answer = count;
    }
  }
  return answer;
}
