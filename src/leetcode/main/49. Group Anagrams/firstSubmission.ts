export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const sort = Array.from(str).sort().join('');
    if (map.has(sort)) {
      map.get(sort)!.push(str);
    } else {
      map.set(sort, [str]);
    }
  }
  return [...map.values()];
}
