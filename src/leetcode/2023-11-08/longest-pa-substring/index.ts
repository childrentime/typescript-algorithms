export function longestPalindrome(s: string): string {
  let result = '';
  const expand = (left: number, right: number) => {
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      if (right - left + 1 > result.length) {
        result = s.substring(left, right + 1);
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }

  return result;
}

console.log(longestPalindrome('babad'));
