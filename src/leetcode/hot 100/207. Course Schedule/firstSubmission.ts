export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const edges: number[][] = [];
  for (let i = 0; i < numCourses; i++) {
    edges[i] = [];
  }
  const inDegree: number[] = new Array(numCourses).fill(0);
  for (const [cur, pre] of prerequisites) {
    edges[pre!]!.push(cur!);
    inDegree[cur!]!++;
  }
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  let visited = 0;
  while (queue.length) {
    visited++;
    const item = queue.shift()!;
    const arr = edges[item]!;
    for (const v of arr) {
      inDegree[v]--;
      if (inDegree[v] === 0) {
        queue.push(v);
      }
    }
  }

  return visited === numCourses;
}
