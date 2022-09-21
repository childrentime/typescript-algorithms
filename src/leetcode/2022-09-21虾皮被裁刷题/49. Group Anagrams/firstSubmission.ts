export default function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const sorted = Array.from(str).sort().join('');
    if (map.has(sorted)) {
      map.get(sorted)!.push(str);
    } else {
      map.set(sorted, [str]);
    }
  }

  return [...map.values()];
}
