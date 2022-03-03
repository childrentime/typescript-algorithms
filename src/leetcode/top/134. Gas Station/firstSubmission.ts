export function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;
  for (let i = 0; i < n; i++) {
    let count = 0;
    let g = gas[i]!;
    if (g === 0) {
      continue;
    }
    let flag = true;
    while (count < n) {
      g = g - cost[(i + count) % n]!;
      if (g < 0) {
        flag = false;
        break;
      }
      count++;
      g += gas[(i + count) % n]!;
    }
    if (flag) {
      return i;
    }
  }
  return -1;
}
