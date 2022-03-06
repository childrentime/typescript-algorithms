export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const inDegrees: number[] = new Array(numCourses).fill(0);
  const edges: number[][] = [];
  for (let i = 0; i < numCourses; i++) {
    edges[i] = [];
  }
  for (const course of prerequisites) {
    inDegrees[course[1]!]++;
    edges[course[0]!]!.push(course[1]!);
  }
  const queue: number[] = [];
  let visited = 0;
  for (let i = 0; i < numCourses; i++) {
    if (inDegrees[i] === 0) {
      queue.push(i);
    }
  }
  while (queue.length > 0) {
    const index = queue.pop()!;
    visited++;
    const arr = edges[index]!;
    for (const i of arr) {
      inDegrees[i]--;
      if (inDegrees[i] === 0) {
        queue.push(i);
      }
    }
  }
  return visited === numCourses;
}
