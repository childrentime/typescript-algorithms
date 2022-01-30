//s ABABABABCEDABCD ABCD
// aa aaa
export function minWindow(s: string, t: string): string {
  let answer = '';
  let left = 0;
  let right = 0;
  const map = new Map<string, number>();
  for (const value of t) {
    map.set(value, (map.get(value) ?? 0) + 1);
  }
  let size = map.size;

  while (right < s.length) {
    const item = s[right]!;
    if (map.has(item)) {
      map.set(item, map.get(item)! - 1);
      if (map.get(item) === 0) {
        size--;
      }
    }
    while (size === 0) {
      if (!answer || answer.length > right + 1 - left) {
        answer = s.substring(left, right + 1);
      }
      const item = s[left]!;
      if (map.has(item)) {
        map.set(item, map.get(item)! + 1);
        if (map.get(item) === 1) {
          size++;
        }
      }
      left++;
    }

    right++;
  }

  return answer;
}
