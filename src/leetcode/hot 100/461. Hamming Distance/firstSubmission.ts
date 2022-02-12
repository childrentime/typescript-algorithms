export function hammingDistance(x: number, y: number): number {
  let answer = 0;
  while (x !== 0 && y !== 0) {
    const xlow = x & -x;
    const ylow = y & -y;
    x = x >>> 1;
    y = y >>> 1;
    if (xlow === 1 && ylow === 1) {
      continue;
    }
    if (xlow !== 1 && ylow !== 1) {
      continue;
    }
    answer++;
  }
  while (x !== 0) {
    const xlow = x & -x;
    if (xlow === 1) {
      answer++;
    }
    x = x >>> 1;
  }
  while (y !== 0) {
    const ylow = y & -y;
    if (ylow === 1) {
      answer++;
    }
    y = y >>> 1;
  }
  return answer;
}
