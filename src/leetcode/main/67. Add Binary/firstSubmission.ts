export function addBinary(a: string, b: string): string {
  while (a.length < b.length) {
    a = '0' + a;
  }
  while (b.length < a.length) {
    b = '0' + b;
  }
  let carry = 0;
  let point = a.length - 1;
  const result: number[] = [];
  while (point >= 0) {
    let v = Number(a[point]) + Number(b[point]) + carry;
    if (v >= 2) {
      v = v - 2;
      carry = 1;
    } else {
      carry = 0;
    }
    result.unshift(v);
    point--;
  }
  if (carry === 1) {
    result.unshift(1);
  }
  return result.join('');
}
