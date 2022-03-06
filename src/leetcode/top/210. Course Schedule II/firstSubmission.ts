export function findOrder(
  numCourses: number,
  prerequisites: number[][]
): number[] {
  const inDegrees: number[] = new Array(numCourses).fill(0);
  const edges: number[][] = [];
  for (let i = 0; i < numCourses; i++) {
    edges[i] = [];
  }
  for (const course of prerequisites) {
    inDegrees[course[0]!]++;
    edges[course[1]!]!.push(course[0]!);
  }
  const queue: number[] = [];
  let visited = 0;
  for (let i = 0; i < numCourses; i++) {
    if (inDegrees[i] === 0) {
      queue.push(i);
    }
  }
  const answer: number[] = [];
  while (queue.length > 0) {
    const index = queue.pop()!;
    answer.push(index);
    visited++;
    const arr = edges[index]!;
    for (const i of arr) {
      inDegrees[i]--;
      if (inDegrees[i] === 0) {
        queue.push(i);
      }
    }
  }
  if (visited === numCourses) {
    return answer;
  } else {
    return [];
  }
}
