export function longestSubstring(s: string, k: number): number {
  const map = new Map<string, number>();
  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char)! + 1);
    } else {
      map.set(char, 1);
    }
  }

  const failWords: string[] = [];
  for (const key of map.keys()) {
    if (map.get(key)! < k) {
      failWords.push(key);
    }
  }

  if (failWords.length === 0) {
    return s.length;
  }

  let splitwords = s.split(new RegExp(failWords.join('|')));

  let max = 0;
  for (const splitword of splitwords) {
    if (!splitword.length) {
      continue;
    }
    max = Math.max(max, longestSubstring(splitword, k));
  }

  return max;
}
