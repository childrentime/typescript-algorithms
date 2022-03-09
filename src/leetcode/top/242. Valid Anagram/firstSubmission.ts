export function isAnagram(s: string, t: string): boolean {
  return Array.from(s).sort().join('') === Array.from(t).sort().join('');
}
