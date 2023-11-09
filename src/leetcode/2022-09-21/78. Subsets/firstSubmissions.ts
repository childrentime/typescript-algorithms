export default function subsets(nums: number[]): number[][] {
  const answer: number[][] = [[]];

  for (const num of nums) {
    const tem: number[][] = [];
    for (const an of answer) {
      tem.push(an.concat(num));
    }
    answer.push(...tem);
  }

  return answer;
}
