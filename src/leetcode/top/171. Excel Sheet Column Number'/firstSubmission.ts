export function titleToNumber(columnTitle: string): number {
  let answer = 0;
  let time = 1;
  const n = columnTitle.length;
  for (let i = n - 1; i >= 0; i--) {
    let v = columnTitle[i]!.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    answer += time * v;
    time = time * 26;
  }
  return answer;
}
