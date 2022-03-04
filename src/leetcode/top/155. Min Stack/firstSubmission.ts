export class MinStack {
  private _stack: number[][] = [];
  constructor() {}

  push(val: number): void {
    if (!this._stack.length) {
      this._stack.push([val, val]);
      return;
    }
    const top = this._stack[this._stack.length - 1]!;
    if (val > top[1]!) {
      this._stack.push([val, top[1]!]);
    } else {
      this._stack.push([val, val]);
    }
  }

  pop(): void {
    this._stack.pop();
    return;
  }

  top(): number {
    return this._stack[this._stack.length - 1]![0]!;
  }

  getMin(): number {
    return this._stack[this._stack.length - 1]![1]!;
  }
}
