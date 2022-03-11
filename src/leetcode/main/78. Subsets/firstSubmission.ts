export function subsets(nums: number[]): number[][] {
  const answer: number[][] = [[]];
  for (const n of nums) {
    let add: number[][] = [];
    for (const item of answer) {
      add.push(item.concat(n));
    }
    for (const item of add) {
      answer.push(item);
    }
  }
  return answer;
}
