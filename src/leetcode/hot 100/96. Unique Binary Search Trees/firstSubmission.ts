// 二叉搜索树： 左边结点比它小 右边结点比它大
// Binary Search Tree: The left node is smaller than it,The right node is larger than it

export function numTrees(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j]! * dp[i - j - 1]!;
    }
  }

  return dp[n]!;
}
