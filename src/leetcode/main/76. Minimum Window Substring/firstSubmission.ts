export function minWindow(s: string, t: string): string {
  const map = new Map<string, number>();
  for (const char of t) {
    if (map.has(char)) {
      map.set(char, map.get(char)! + 1);
    } else {
      map.set(char, 1);
    }
  }
  const copy = new Map<string, number>();
  let valid = 0;
  let left = 0;
  let right = 0;
  let answer = '';
  let len = Infinity;
  while (right < s.length) {
    const item = s[right]!;
    right++;
    if (map.has(item)) {
      if (copy.has(item)) {
        copy.set(item, copy.get(item)! + 1);
      } else {
        copy.set(item, 1);
      }
      if (copy.get(item) === map.get(item)) {
        valid++;
      }
    }
    while (valid === map.size) {
      if (len > right - left) {
        len = right - left;
        answer = s.substring(left, right);
      }
      const item = s[left]!;
      left++;
      if (map.has(item)) {
        if (map.get(item) === copy.get(item)) {
          valid--;
        }
        copy.set(item, copy.get(item)! - 1);
      }
    }
  }
  return answer;
}
