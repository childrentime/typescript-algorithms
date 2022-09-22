export default function findAnagrams(s: string, p: string): number[] {
  const map = new Map<string, number>();

  for (const str of p) {
    if (map.has(str)) {
      map.set(str, map.get(str)! + 1);
    } else {
      map.set(str, 1);
    }
  }

  const newMap = new Map<string, number>();

  let left = 0;
  let right = 0;
  let valid = 0;
  let answer: number[] = [];
  while (right < s.length) {
    const char = s[right]!;
    right++;
    if (map.has(char)) {
      if (newMap.has(char)) {
        newMap.set(char, newMap.get(char)! + 1);
      } else {
        newMap.set(char, 1);
      }
      if (newMap.get(char) === map.get(char)) {
        valid++;
      }
    }

    if (right - left === p.length) {
      if (valid === map.size) {
        answer.push(left);
      }
      const item = s[left]!;
      left++;
      if (map.has(item)) {
        if (map.get(item) === newMap.get(item)) {
          valid--;
        }
        newMap.set(item, newMap.get(item)! - 1);
      }
    }
  }

  return answer;
}
