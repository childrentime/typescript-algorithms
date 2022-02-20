export function isValid(s: string): boolean {
  const stack = [];
  const map = new Map<string, string>([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);
  for (const item of s) {
    if (map.has(item)) {
      stack.push(item);
    } else {
      if (item !== map.get(stack.pop()!)) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
}
