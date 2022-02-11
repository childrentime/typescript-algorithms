export function findAnagrams(s: string, p: string): number[] {
  const map = new Map<string, number>();
  const window = new Map<string, number>();
  for (const item of p) {
    if (map.has(item)) {
      map.set(item, map.get(item)! + 1);
    } else {
      window.set(item, 0);
      map.set(item, 1);
    }
  }
  let right = 0;
  let left = 0;
  let valid = 0;
  const answer: number[] = [];
  while (right < s.length) {
    const str = s[right]!;
    right++;
    if (window.has(str)) {
      window.set(str, window.get(str)! + 1);
      if (window.get(str) === map.get(str)) {
        valid++;
      }
      if (valid === map.size) {
        answer.push(left);
      }
    }
    if (right - left === p.length) {
      const leftStr = s[left]!;
      left++;
      if (window.has(leftStr)) {
        if (window.get(leftStr) === map.get(leftStr)) {
          valid--;
        }
        window.set(leftStr, window.get(leftStr)! - 1);
      }
    }
  }

  return answer;
}
