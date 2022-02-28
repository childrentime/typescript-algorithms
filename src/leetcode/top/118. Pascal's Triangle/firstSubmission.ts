export function generate(numRows: number): number[][] {
  const answer: number[][] = [[1]];
  for (let i = 1; i < numRows; i++) {
    answer[i] = [];
    for (let j = 0; j <= answer[i - 1]!.length; j++) {
      if (j === 0) {
        answer[i]!.push(1);
      } else if (j === answer[i - 1]!.length) {
        answer[i]!.push(1);
      } else {
        answer[i]!.push(answer[i - 1]![j]! + answer[i - 1]![j - 1]!);
      }
    }
  }

  return answer;
}
