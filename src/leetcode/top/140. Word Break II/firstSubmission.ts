// s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// dp[i] 中存 s[i]对应的答案
export function wordBreak(s: string, wordDict: string[]): string[] {
  const dp: string[][] = new Array(s.length + 1).fill(0);
  dp[0] = [''];
  const wordDictSet: Set<string> = new Set(wordDict);

  for (let i = 1; i <= s.length; i++) {
    dp[i] = [];
    for (let j = i - 1; j >= 0; j--) {
      // 如果s(j,i)是合法后缀
      if (wordDictSet.has(s.slice(j, i)) && dp[j]!.length > 0) {
        dp[j]!.forEach(item => dp[i]!.push(item + ' ' + s.slice(j, i)));
      }
    }
  }
  return dp[s.length]!.map(item => item.trim());
}
