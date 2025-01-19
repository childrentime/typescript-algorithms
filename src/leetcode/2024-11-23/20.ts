const map = new Map();
map.set(')', '(');
map.set('}', '{');
map.set(']', '[');

export function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }
  const stack: string[] = [];
  for (const char of s) {
    if (map.has(char)) {
      const match = stack.pop()!;
      if (match !== map.get(char)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return true;
}
