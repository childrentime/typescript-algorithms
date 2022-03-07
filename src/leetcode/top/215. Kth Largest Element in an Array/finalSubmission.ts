export function findKthLargest(nums: number[], k: number): number {
  const pq = new PQ();
  for (const num of nums) {
    pq.add(num);
  }
  let answer = 0;
  while (k--) {
    answer = pq.remove();
  }
  return answer;
}

class PQ {
  arr: number[] = [];

  add(value: number): void {
    if (!this.arr.length) {
      this.arr.push(value);
      return;
    } else {
      this.arr.push(value);
      this.swim();
    }
  }

  swim() {
    let n = this.arr.length - 1;
    let value = this.arr[n]!;
    while (n > 0) {
      let parent = (n - 1) >>> 1;
      if (value > this.arr[parent]!) {
        this.arr[n] = this.arr[parent]!;
        n = parent;
      } else {
        break;
      }
    }
    this.arr[n] = value;
  }

  remove(): number {
    if (this.arr.length === 1) {
      return this.arr.pop()!;
    } else {
      let result = this.arr[0]!;
      this.arr[0] = this.arr[this.arr.length - 1]!;
      this.arr.pop();
      this.sink();
      return result;
    }
  }

  sink() {
    const limit = (this.arr.length - 2) >>> 1;
    let n = 0;
    let value = this.arr[n]!;
    while (n <= limit) {
      let childIndex = (n << 1) + 1;
      let child = this.arr[childIndex]!;
      if (child < this.arr[childIndex + 1]!) {
        child = this.arr[++childIndex]!;
      }
      if (value < child) {
        this.arr[n] = child;
      } else {
        break;
      }
      n = childIndex;
    }
    this.arr[n] = value;
  }
}
