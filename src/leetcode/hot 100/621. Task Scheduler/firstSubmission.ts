export function leastInterval(tasks: string[], n: number): number {
  const map = new Map<string, number>();
  for (const task of tasks) {
    if (map.has(task)) {
      map.set(task, map.get(task)! + 1);
    } else {
      map.set(task, 1);
    }
  }
  const m = map.size;
  // 任务限制时间数组
  const nextVaild: number[] = new Array(m).fill(1);
  // 剩余任务数量数组
  const rest = [...map.values()];

  let time = 0;
  for (let i = 0; i < tasks.length; i++) {
    time++;
    let minNextVaild = Infinity;
    for (let j = 0; j < m; j++) {
      if (rest[j]! > 0) {
        minNextVaild = Math.min(minNextVaild, nextVaild[j]!);
      }
    }
    // 如果都不能选了 time要为最小的那个不能选的
    time = Math.max(time, minNextVaild);

    let best = -1;
    // 每次找到剩余次数最多的那个任务
    for (let j = 0; j < m; j++) {
      if (rest[j] !== 0 && nextVaild[j]! <= time) {
        if (best === -1 || rest[j]! > rest[best]!) {
          best = j;
        }
      }
    }

    nextVaild[best] = time + n + 1;
    rest[best]--;
  }

  return time;
}
