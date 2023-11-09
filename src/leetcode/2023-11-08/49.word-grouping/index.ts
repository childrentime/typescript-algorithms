export function groupAnagrams(strs: string[]): string[][] {
  const result = new Map<string, string[]>();

  for (const str of strs) {
    const normalize = Array.from(str).sort().join('');
    if (result.has(normalize)) {
      result.set(normalize, [...result.get(normalize)!, str]);
    } else {
      result.set(normalize, [str]);
    }
  }

  return Array.from(result.values());
}
