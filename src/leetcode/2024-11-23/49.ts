/**
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
export function groupAnagrams(strs: string[]): string[][] {
  const result = new Map<string, string[]>();

  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (result.has(key)) {
      result.get(key)!.push(str);
    } else {
      result.set(key, [str]);
    }
  }

  return [...result.values()];
}
