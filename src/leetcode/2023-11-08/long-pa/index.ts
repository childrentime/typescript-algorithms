export function longestPalindrome(s: string): number {
  const map = new Map<string, number>();
  for (const str of s) {
    if (map.has(str)) {
      map.set(str, map.get(str)! + 1);
    } else {
      map.set(str, 1);
    }
  }

  let result = 0;
  let notOdd = true;
  for (const value of map.values()) {
    if (value % 2 === 0) {
      result += value;
    } else {
      notOdd = false;
      if (value <= 1) {
        continue;
      }
      result += value - 1;
    }
  }

  if (!notOdd) {
    result += 1;
  }

  return result;
}

console.log(longestPalindrome('ababababa'));
