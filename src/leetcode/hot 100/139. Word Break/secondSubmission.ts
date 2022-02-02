export function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const wordSet = new Set(wordDict);
  const memo = new Array(n);

  const canBreak = (start: number) => {
    if (start === n) {
      return true;
    }
    if (memo[start] !== undefined) {
      return false;
    }
    for (let i = start + 1; i <= n; i++) {
      const prefix = s.substring(start, i);
      if (wordSet.has(prefix) && canBreak(i)) {
        return true;
      }
    }
    memo[start] = false;
    return false;
  };

  return canBreak(0);
}
