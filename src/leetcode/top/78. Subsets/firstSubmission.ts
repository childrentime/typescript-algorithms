export function subsets(nums: number[]): number[][] {
  const answer: number[][] = [[]];
  for (const item of nums) {
    let add: number[][] = [];
    for (const v of answer) {
      add.push(v.concat(item));
    }
    for (const v of add) {
      answer.push(v);
    }
  }
  return answer;
}
