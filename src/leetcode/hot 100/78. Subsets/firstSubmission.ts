export function subsets(nums: number[]): number[][] {
  const answer: number[][] = [[]];
  for (let i = 0; i < nums.length; i++) {
    let add: number[][] = [];
    for (const item of answer) {
      add.push([...item, nums[i]!]);
    }
    for (const item of add) {
      answer.push(item);
    }
  }

  return answer;
}
