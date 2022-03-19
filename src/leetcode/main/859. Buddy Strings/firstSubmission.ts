export function buddyStrings(s: string, goal: string): boolean {
  let diff: number[] = [];
  if (s.length !== goal.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push(i);
    }
  }
  if (diff.length === 0) {
    const set = new Set();
    for (const item of s) {
      if (set.has(item)) {
        return true;
      }
      set.add(item);
    }
    return false;
  }
  if (diff.length !== 2) {
    return false;
  }
  if (s[diff[0]!] !== goal[diff[1]!] || s[diff[1]!] !== goal[diff[0]!]) {
    return false;
  }
  return true;
}
