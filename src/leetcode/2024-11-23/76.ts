export function minWindow(s: string, t: string): string {
  const map = new Map<string, number>();
  for (const char of t) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }
  let size = map.size;
  let left = 0;
  let right = 0;
  let result = '';
  while (right < s.length) {
    const char = s[right]!;
    if (map.has(char)) {
      map.set(char, map.get(char)! - 1);
      if (map.get(char) === 0) {
        size--;
      }
    }

    while (size === 0) {
      if (!result || result.length > right - left + 1) {
        result = s.substring(left, right + 1);
      }
      const popChar = s[left]!;
      if (map.has(popChar)) {
        map.set(popChar, map.get(popChar)! + 1);
        if (map.get(popChar)! === 1) {
          size++;
        }
      }
      left++;
    }
    right++;
  }

  return result;
}

console.log(minWindow('ADOBECODEBANC', 'ABC'));
