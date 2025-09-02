export function minDistance(word1: string, word2: string): number {
  const memo = new Map<string, number>();

  function helper(w1: string, w2: string): number {
    const m = w1.length;
    const n = w2.length;
    const key = `${m},${n}`;

    if (memo.has(key)) {
      return memo.get(key)!;
    }

    if (m === 0) {
      memo.set(key, n);
      return n;
    }
    if (n === 0) {
      memo.set(key, m);
      return m;
    }

    const option1 = helper(w1.slice(0, m - 1), w2.slice(0, n - 1));
    const option2 = helper(w1.slice(0, m - 1), w2);
    const option3 = helper(w1, w2.slice(0, n - 1));

    let result: number;
    if (w1[m - 1] === w2[n - 1]) {
      result = Math.min(option1, 1 + option2, 1 + option3);
    } else {
      result = 1 + Math.min(option1, option2, option3);
    }

    memo.set(key, result);
    return result;
  }

  return helper(word1, word2);
}

console.log(minDistance("intention", "execution"))