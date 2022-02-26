export function minWindow(s: string, t: string): string {
  const map = new Map<string, number>();
  for (const item of t) {
    if (map.has(item)) {
      map.set(item, map.get(item)! + 1);
    } else {
      map.set(item, 1);
    }
  }
  let left = 0;
  let right = 0;
  let target = t.length;
  let min = s.length + 1;
  let answer = '';
  while (right < s.length) {
    const r = s[right]!;
    if (map.has(r)) {
      let v = map.get(r)!;
      if (v > 0) {
        target--;
      }
      map.set(r, map.get(r)! - 1);
    }
    // 碰到一个可行解的时候 尝试去获得最小可行解
    if (target === 0) {
      while (target === 0) {
        let l = s[left]!;
        if (map.has(l)) {
          let v = map.get(l)!;
          if (v >= 0) {
            target++;
          }
          map.set(l, map.get(l)! + 1);
        }
        left++;
      }
      if (min > right - left + 1) {
        min = right - left + 1;
        answer = s.substring(left - 1, right + 1);
      }
    }
    right++;
  }
  return answer;
}
