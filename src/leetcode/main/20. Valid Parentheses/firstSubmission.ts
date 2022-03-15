export function isValid(s: string): boolean {
  const map = new Map<string, string>([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ]);
  const stack: string[] = [];
  for (const str of s) {
    if (map.has(str)) {
      stack.push(str);
    } else {
      const item = stack.pop()!;
      if (map.get(item) !== str) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
}
