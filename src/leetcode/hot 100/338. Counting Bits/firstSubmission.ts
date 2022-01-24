export function countBits(n: number): number[] {
  const answer: number[] = [];
  for (let i = 0; i <= n; i++) {
    let count = 0;
    let tem = i;
    while (tem !== 0) {
      const v = tem & -tem;
      if (v === 1) {
        count++;
      }
      tem >>= 1;
    }
    answer.push(count);
  }

  return answer;
}
