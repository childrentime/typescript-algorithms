import Stack from '../../../data-structures/stack/Stack';

export function isValid(s: string): boolean {
  const map = new Map<string, string>();
  const right = [')', ']', '}'];
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');
  const stack = new Stack<string>();
  for (let i = 0; i < s.length; i++) {
    if (right.includes(s[i]!)) {
      if (map.get(stack.pop()) !== s[i]) {
        return false;
      }
    } else {
      stack.push(s[i]!);
    }
  }
  if (!stack.isEmpty()) return false;
  return true;
}
