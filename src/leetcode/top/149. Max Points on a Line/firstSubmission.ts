export function maxPoints(points: number[][]): number {
  if (points.length < 2) {
    return 1;
  }
  let answer = 0;
  for (let i = 0; i < points.length; i++) {
    const map = new Map<number, number>();
    for (let j = 0; j < points.length; j++) {
      if (i === j) {
        continue;
      }
      const k =
        (points[j]![1]! - points[i]![1]!) / (points[j]![0]! - points[i]![0]!);
      map.set(k, map.has(k) ? map.get(k)! + 1 : 2);
    }
    for (const v of map.values()) {
      if (answer < v) {
        answer = v;
      }
    }
  }
  return answer;
}
