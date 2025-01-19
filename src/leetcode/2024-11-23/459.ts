export function repeatedSubstringPattern(s: string): boolean {
  return s.concat(s).indexOf(s, 1) !== s.length;
}
