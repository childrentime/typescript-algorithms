export function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0]! - a[0]!;
    } else {
      return a[1]! - b[1]!;
    }
  });

  const answer: number[][] = [];
  for (const person of people) {
    answer.splice(person[1]!, 0, person);
  }
  return answer;
}
