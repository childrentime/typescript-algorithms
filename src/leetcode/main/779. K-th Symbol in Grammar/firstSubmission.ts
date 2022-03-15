export function kthGrammar(n: number, k: number): number {
  if (n == 1) {
    return 0;
  }
  if ((k & 1) !== 0) {
    //奇数
    return kthGrammar(n - 1, (k + 1) / 2);
  } else {
    return kthGrammar(n - 1, k / 2) === 0 ? 1 : 0;
  }
}
