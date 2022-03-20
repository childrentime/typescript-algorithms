export function generateParenthesis(n: number): string[] {
  let set = new Set<string>();
  set.add('()');
  for (let i = 2; i <= n; i++) {
    const s = new Set<string>();
    for (const item of set) {
      for (let j = 0; j < item.length; j++) {
        s.add(`${item.substring(0, j)}()${item.substring(j)}`);
        s.add(`${item.substring(0, j + 1)}()${item.substring(j + 1)}`);
      }
    }
    set = s;
  }
  return [...set];
}
