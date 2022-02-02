// dp[i] 表示字符串 s 前 i 个字符组成的字符串 s[0..i-1] 是否能被空格拆分成若干个字典中出现的单词。
// dp[i] = (dp[i-1] && check(i-1,i)) || (dp[i-2] && check(i-2,i)) || ... || (dp[0] && check(0,i))
export function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const wordSet = new Set(wordDict);
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[i] === true) {
        break;
      }
      if (dp[j] === false) {
        continue;
      }
      const suffix = s.substring(j, i);
      if (wordSet.has(suffix) && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}
