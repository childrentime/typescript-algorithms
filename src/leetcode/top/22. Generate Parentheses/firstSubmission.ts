function generateParenthesis(n: number): string[] {
  let result = new Set<string>();
  result.add('()');
  for (let i = 2; i <= n; i++) {
    const set = new Set<string>();
    for (const item of result) {
      for (let j = 0; j < item.length; j++) {
        if (item[j] === '(') {
          set.add(`${item.substring(0, j)}()${item.substring(j)}`);
          set.add(`${item.substring(0, j + 1)}()${item.substring(j + 1)}`);
        }
      }
    }
    result = set;
  }
  return [...result];
}
