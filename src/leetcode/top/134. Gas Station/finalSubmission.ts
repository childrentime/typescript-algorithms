// 如果可以从 x出发 那么说明x到下一个加油站可能还有剩余的油
// 如果 x到不了 y,那么从 x~y中的任意一点出发都到不了，他们都没有这个剩余的油
export function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;
  let i = 0;
  while (i < n) {
    let g = 0;
    let c = 0;
    let cnt = 0;
    while (cnt < n) {
      const j = (i + cnt) % n;
      g += gas[j]!;
      c += cost[j]!;
      if (c > g) {
        break;
      }
      cnt++;
    }
    if (cnt === n) {
      return i;
    } else {
      i = i + cnt + 1;
    }
  }
  return -1;
}
