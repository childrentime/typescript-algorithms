export function longestPalindrome(s: string): string {
  let len = s.length;
  if (len < 2) {
    return s;
  }
  let max = 1;
  let maxStr = s[0];
  const dp = Array.from(new Array(len)).map(() => new Array(len).fill(false));
  for (let i = 0; i < len; i++) {
    dp[i]![i] = true;
  }
  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i]![i + 1] = true;
      max = 2;
      maxStr = s.substring(i, i + 2);
    } else {
      dp[i]![i + 1] = false;
    }
  }
  if (len < 3) {
    return maxStr!;
  }

  for (let i = len - 3; i >= 0; i--) {
    for (let j = i + 2; j <= len - 1; j++) {
      if (dp[i + 1]![j - 1] && s[i] === s[j]) {
        dp[i]![j] = true;
        if (max < j - i + 1) {
          max = j - i + 1;
          maxStr = s.substring(i, j + 1);
        }
      } else {
        dp[i]![j] = false;
      }
    }
  }

  return maxStr!;
}
