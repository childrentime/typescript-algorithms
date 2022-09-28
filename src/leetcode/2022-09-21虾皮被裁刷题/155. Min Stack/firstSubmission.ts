export default class MinStack {
  private arr: [number, number][] = [];
  constructor() {}

  push(val: number): void {
    const top = this.arr[this.arr.length - 1]!;
    if (!top || top[1] > val) {
      this.arr.push([val, val]);
    } else {
      this.arr.push([val, top[1]]);
    }
  }

  pop(): void {
    this.arr.pop();
  }

  top(): number {
    return this.arr[this.arr.length - 1]![0];
  }

  getMin(): number {
    return this.arr[this.arr.length - 1]![1];
  }
}
