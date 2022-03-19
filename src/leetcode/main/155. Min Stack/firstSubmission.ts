export class MinStack {
  private stack: number[][] = [];
  constructor() {}

  push(val: number): void {
    if (!this.stack.length) {
      this.stack.push([val, val]);
      return;
    }
    const v = this.stack[this.stack.length - 1]![1]!;
    if (v < val) {
      this.stack.push([val, v]);
    } else {
      this.stack.push([val, val]);
    }
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1]![0]!;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1]![1]!;
  }
}
