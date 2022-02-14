export function countSubstrings(s: string): number {
  let len = s.length;
  if (len < 2) {
    return 1;
  }
  let count = 0;
  const dp = Array.from(new Array(len)).map(() => new Array(len).fill(false));
  for (let i = 0; i < len; i++) {
    dp[i]![i] = true;
    count++;
  }
  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i]![i + 1] = true;
      count++;
    } else {
      dp[i]![i + 1] = false;
    }
  }
  if (len < 3) {
    return count;
  }

  for (let i = len - 3; i >= 0; i--) {
    for (let j = i + 2; j <= len - 1; j++) {
      if (dp[i + 1]![j - 1] && s[i] === s[j]) {
        dp[i]![j] = true;
        count++;
      } else {
        dp[i]![j] = false;
      }
    }
  }

  return count;
}
