export function firstUniqChar(s: string): number {
  const map = new Map<string, number>();
  for (const ch of s) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch)! + 1);
    } else {
      map.set(ch, 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]!) === 1) {
      return i;
    }
  }
  return -1;
}
