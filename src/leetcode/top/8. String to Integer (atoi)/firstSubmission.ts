export function myAtoi(s: string): number {
  let point = 0;
  const n = s.length;
  let nagtive = false;
  let answer = 0;
  while (point < n) {
    if (s[point] === ' ') {
      point++;
      continue;
    }
    if (s[point] === '-') {
      point++;
      nagtive = true;
    }
    if (s[point] === '+') {
      if (nagtive) {
        return 0;
      }
      point++;
    }
    while (!isNaN(parseInt(s[point]!))) {
      const number = parseInt(s[point]!);
      answer = answer * 10 + number;
      point++;
    }
    break;
  }
  const llimit = (-2) ** 31;
  const rlimit = 2 ** 31 - 1;
  if (nagtive) {
    if (-answer < llimit) {
      return llimit;
    } else {
      return -answer;
    }
  } else {
    if (answer > rlimit) {
      return rlimit;
    } else {
      return answer;
    }
  }
}
