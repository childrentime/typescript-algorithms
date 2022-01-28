export function groupAnagrams(strs: string[]): string[][] {
  const answer: string[][] = [];
  const map = new Map<string, string[]>();
  for (let i = 0; i < strs.length; i++) {
    let tem = strs[i] as string;
    tem = Array.from(tem).sort().join('');
    if (map.has(tem)) {
      const arr = map.get(tem) as string[];
      arr.push(strs[i]!);
    } else {
      map.set(tem, [strs[i]!]);
    }
  }
  for (const item of map.values()) {
    answer.push(item);
  }
  return answer;
}
