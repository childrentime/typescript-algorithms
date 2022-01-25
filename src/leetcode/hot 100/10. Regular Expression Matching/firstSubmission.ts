export function isMatch(s: string, p: string): boolean {
  const expression = new RegExp(p, 'g');
  const match = s.match(expression);
  if (!match) {
    return false;
  }
  for (const item of match!) {
    if (item === s) {
      return true;
    }
  }
  return false;
}
