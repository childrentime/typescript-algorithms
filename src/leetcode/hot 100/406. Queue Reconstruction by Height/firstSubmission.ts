export function reconstructQueue(people: number[][]): number[][] {
  people = people.sort((a, b) => {
    if (a[0]! !== b[0]!) {
      return b[0]! - a[0]!;
    } else {
      return a[1]! - b[1]!;
    }
  });
  const answer: number[][] = [];
  // [7,0][7,1][6,1][5,0][5,2][4,4]
  // 5 7 5 6 4 7
  for (const person of people) {
    answer.splice(person[1]!, 0, person);
  }
  return answer;
}
