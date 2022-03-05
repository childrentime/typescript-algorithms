export function isHappy(n: number): boolean {
  const set = new Set();
  while (!set.has(n) && n !== 1) {
    set.add(n);
    const str = n.toString();
    let tem = 0;
    for (let i = 0; i < str.length; i++) {
      tem += Number(str[i]!) * Number(str[i]!);
    }
    n = tem;
  }
  return n === 1;
}
