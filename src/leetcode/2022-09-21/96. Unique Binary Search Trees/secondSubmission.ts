const map = new Map();
map.set(0, 1);
map.set(1, 1);
export default function numTrees(n: number): number {
  let res = 0;
  for (let i = 0; i < n; i++) {
    let first: number;
    let last: number;
    if (map.has(i)) {
      first = map.get(i);
    } else {
      first = numTrees(i);
      map.set(i, first);
    }

    if (map.has(n - i - 1)) {
      last = map.get(n - i - 1);
    } else {
      last = numTrees(n - i - 1);
      map.set(n - i - 1, last);
    }
    res += last * first;
  }
  return res;
}
