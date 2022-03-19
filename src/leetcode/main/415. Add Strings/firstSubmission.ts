export function addStrings(num1: string, num2: string): string {
  const result: number[] = [];
  let n1 = num1.length - 1;
  let n2 = num2.length - 1;
  let carry = 0;
  while (n1 >= 0 && n2 >= 0) {
    let v: number = Number(num1[n1]!) + Number(num2[n2]!) + carry;
    if (v >= 10) {
      v = v - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    result.unshift(v);
    n1--;
    n2--;
  }
  while (n1 >= 0) {
    let v = Number(num1[n1]!) + carry;
    if (v >= 10) {
      v = v - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    result.unshift(v);
    n1--;
  }
  while (n2 >= 0) {
    let v = Number(num2[n2]!) + carry;
    if (v >= 10) {
      v = v - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    result.unshift(v);
    n2--;
  }
  if (carry === 1) {
    result.unshift(1);
  }
  return result.join('');
}
