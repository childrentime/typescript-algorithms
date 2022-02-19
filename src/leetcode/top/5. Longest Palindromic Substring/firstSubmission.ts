export function longestPalindrome(s: string): string {
  let max = 1;
  let maxStr = s[0]!;
  const expand = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left - 1 > max) {
      max = right - left - 1;
      maxStr = s.substring(left + 1, right);
    }
  };
  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }
  return maxStr;
}
