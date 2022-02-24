export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const item of strs) {
    const v = Array.from(item).sort().join('');
    if (map.has(v)) {
      map.get(v)!.push(item);
    } else {
      map.set(v, [item]);
    }
  }
  return [...map.values()];
}
