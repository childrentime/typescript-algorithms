export function subsets(nums: number[]): number[][] {
  return nums.reduce(
    (pre: number[][], cur) => pre.concat(pre.map(item => item.concat(cur))),
    [[]]
  );
}
