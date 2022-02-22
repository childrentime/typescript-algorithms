export function countAndSay(n: number): string {
  let base = '1';
  for (let i = 2; i <= n; i++) {
    let result = '';
    const len = base.length;
    let j = 0;
    while (j < len) {
      const ch = base[j];
      let count = 1;
      while (base[j] === base[j + 1]) {
        j++;
        count++;
      }
      j++;
      result = `${result}${count}${ch}`;
    }
    base = result;
  }
  return base;
}
