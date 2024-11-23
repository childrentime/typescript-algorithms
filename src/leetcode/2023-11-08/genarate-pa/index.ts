export function generateParenthesis(n: number): string[] {
  const helper = (n: number): Set<string> => {
    if (n < 2) {
      return new Set(['()']);
    }

    const set = new Set<string>();
    const pas = helper(n - 1);
    for (const str of pas) {
      for (let i = 0; i < str.length; i++) {
        set.add(`${str.substring(0, i)}()${str.substring(i, str.length)}`);
      }
    }

    return set;
  };

  return [...helper(n)];
}
