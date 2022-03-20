// 1 2 2 [] [1] [2] [1,2] [2,2] [1,2,2] 只和 最多的那个生成
export function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const answer: number[][] = [[]];
  for (const num of nums) {
    let tem: number[][] = [];
    const last = answer[answer.length - 1]!;
    let count = 0;
    for (const item of last) {
      if (num === item) {
        count++;
      }
    }
    for (const item of answer) {
      if (count === 0) {
        tem.push(item.concat(num));
      } else {
        let c = 0;
        for (const i of item) {
          if (i === num) {
            c++;
          }
        }
        if (c === count) {
          tem.push(item.concat(num));
        }
      }
    }
    for (const item of tem) {
      answer.push(item);
    }
  }
  return answer;
}
