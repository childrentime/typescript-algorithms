export function countSubstrings(s: string): number {
  const n = s.length;
  let answer = 0;
  for (let i = 0; i < 2 * n - 1; i++) {
    let l = i / 2,
      r = l + (i % 2);
    while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
      l--;
      r++;
      answer++;
    }
  }
  return answer;
}
