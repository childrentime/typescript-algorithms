function letterCombinations(digits: string): string[] {
  const map = new Map<number, string[]>();
  map.set(2, ['a', 'b', 'c']);
  map.set(3, ['d', 'e', 'f']);
  map.set(4, ['g', 'h', 'i']);
  map.set(5, ['j', 'k', 'l']);
  map.set(6, ['m', 'n', 'o']);
  map.set(7, ['p', 'q', 'r', 's']);
  map.set(8, ['t', 'u', 'v']);
  map.set(9, ['w', 'x', 'y', 'z']);
  let result: string[] = [];
  for (const item of digits) {
    const candidates = map.get(Number(item))!;
    const res = [];
    if (!result.length) {
      result = candidates;
      continue;
    }
    for (const r of result) {
      for (const candidate of candidates) {
        res.push(r.concat(candidate));
      }
    }
    result = res;
  }
  return result;
}
