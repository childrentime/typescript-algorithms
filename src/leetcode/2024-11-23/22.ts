export function generateParenthesis(n: number): string[] {
  let result = new Set(['']);
  for (let i = 0; i < n; i++) {
    const newResult = new Set<string>();
    for (const str of result) {
      for (let i = 0; i <= str.length; i++) {
        newResult.add(str.slice(0, i) + '()' + str.slice(i, str.length));
      }
    }
    result = newResult;
  }
  return [...result];
}
