function myAtoi(s: string): number {
  const result = parseInt(s);
  const llimit = (-2) ** 31;
  const rlimit = 2 ** 31 - 1;
  if (isNaN(result)) {
    return 0;
  }
  if (result < llimit) {
    return llimit;
  }
  if (result > rlimit) {
    return rlimit;
  }
  return result;
}
