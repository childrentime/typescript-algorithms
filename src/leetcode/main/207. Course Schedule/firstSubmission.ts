export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const edges: number[][] = Array.from(new Array(numCourses)).map(() => []);
  const inDegree: number[] = new Array(numCourses).fill(0);
  for (const course of prerequisites) {
    edges[course[1]!]!.push(course[0]!);
    inDegree[course[0]!]++;
  }
  const queue: number[] = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  let visited = 0;
  while (queue.length) {
    const course = queue.shift()!;
    visited++;
    const courses = edges[course]!;
    for (const c of courses) {
      inDegree[c]--;
      if (inDegree[c] === 0) {
        queue.push(c);
      }
    }
  }
  return visited === numCourses;
}
