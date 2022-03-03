export function longestConsecutive(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }
  const set = new Set(nums);
  const map = new Map<number, number>();
  for (const s of set) {
    map.set(s, s);
  }

  const root = (i: number) => {
    while (map.get(i) !== i) {
      map.set(i, map.get(map.get(i)!)!);
      i = map.get(i)!;
    }
    return i;
  };

  const connected = (i: number, j: number): boolean => {
    const p = root(i);
    const q = root(j);
    return p === q;
  };

  const union = (i: number, j: number): void => {
    const p = root(i);
    const q = root(j);
    map.set(q, p);
  };

  for (const s of set) {
    if (map.has(s - 1)) {
      if (!connected(s, s - 1)) {
        union(s, s - 1);
      }
    }
  }

  let answer = 0;
  for (const s of set) {
    let r = root(s);
    answer = Math.max(answer, r - s + 1);
  }

  return answer;
}
