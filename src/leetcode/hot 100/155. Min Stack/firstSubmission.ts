export class MinStack {
  private stack: number[][] = [];
  constructor() {}

  push(val: number): void {
    if (this.stack.length === 0) {
      this.stack.push([val, val]);
    } else {
      const top = this.stack[this.stack.length - 1]!;
      if (val > top[0]!) {
        this.stack.push([val, top[0]!]);
      } else {
        this.stack.push([val, val]);
      }
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

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
