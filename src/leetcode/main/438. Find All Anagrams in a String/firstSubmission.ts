export function findAnagrams(s: string, p: string): number[] {
  const answer: number[] = [];
  const n = s.length;
  const map = new Map<string, number>();
  const originMap = new Map<string, number>();
  for (const char of p) {
    if (originMap.has(char)) {
      originMap.set(char, originMap.get(char)! + 1);
    } else {
      originMap.set(char, 1);
    }
  }
  let left = 0;
  let right = 0;
  let valid = 0;
  while (right < n) {
    const item = s[right]!;
    right++;
    if (originMap.has(item)) {
      if (map.has(item)) {
        map.set(item, map.get(item)! + 1);
      } else {
        map.set(item, 1);
      }
      if (map.get(item) === originMap.get(item)) {
        valid++;
      }
    }
    if (right - left === p.length) {
      if (valid === originMap.size) {
        answer.push(left);
      }
      const item = s[left]!;
      left++;
      if (originMap.has(item)) {
        if (map.get(item) === originMap.get(item)) {
          valid--;
        }
        map.set(item, map.get(item)! - 1);
      }
    }
  }
  return answer;
}
