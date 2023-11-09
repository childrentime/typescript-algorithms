

// dp[0][0] = dp[2][0]
// dp[0][1] = dp[1][0]
// dp[0][2] = dp[0][0]
// dp[1][0] =dp[2][1]
// dp[i][j] = dp[n-j-1][i]
export default function rotate(matrix: number[][]): void {
  const n = matrix.length;


  for(let i =0;i< n >>> 1;i++){
    for(let j = 0; j< (n+1) >>> 1;j++){
      const temp = matrix[i]![j]!;
      matrix[i]![j]! = matrix[n-j-1]![i]!;
      matrix[n-j-1]![i]! = matrix[n-i-1]![n-j-1]!;
      matrix[n-i-1]![n-j-1]! = matrix[j]![n-i-1]!
      matrix[j]![n-i-1] = temp;
    }
  }
}
