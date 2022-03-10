export class Solution {
  arr: number[];
  origin: number[];
  constructor(nums: number[]) {
    this.arr = nums.slice();
    this.origin = nums.slice();
  }

  reset(): number[] {
    this.arr = this.origin.slice();
    return this.arr;
  }

  shuffle(): number[] {
    const n = this.arr.length;
    for (let i = 0; i < n; i++) {
      const random = ~~(Math.random() * (i + 1));
      [this.arr[i], this.arr[random]] = [this.arr[random]!, this.arr[i]!];
    }
    return this.arr;
  }
}
