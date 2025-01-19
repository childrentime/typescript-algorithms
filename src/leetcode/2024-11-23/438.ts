export function findAnagrams(s: string, p: string): number[] {
  const map = new Map<string, number>();
  for (const char of p) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }
  const windowMap = new Map<string, number>();
  for (let i = 0; i < p.length; i++) {
    windowMap.set(s[i]!, (windowMap.get(s[i]!) ?? 0) + 1);
  }
  const result: number[] = [];

  if (mapsAreEqual(map, windowMap)) {
    result.push(0);
  }

  for (let i = p.length; i < s.length; i++) {
    const newItem = s[i]!;
    const popItem = s[i - p.length]!;
    if (windowMap.has(newItem)) {
      windowMap.set(newItem, windowMap.get(newItem)! + 1);
    }
    if (windowMap.has(popItem)) {
      windowMap.set(popItem, windowMap.get(popItem)! - 1);
    }
    if (mapsAreEqual(map, windowMap)) {
      result.push(i - p.length + 1);
    }
  }
  return result;
}

const mapsAreEqual = (map1: Map<string, number>, map2: Map<string, number>) => {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const key of map1.keys()) {
    if (map1.get(key) !== map2.get(key)) {
      return false;
    }
  }

  return true;
};
