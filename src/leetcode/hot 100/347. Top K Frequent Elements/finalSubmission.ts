// 1 3 4
class PQ {
  private arr: [number, number][] = [];

  private sink() {
    const n = this.arr.length;
    if (n === 0) {
      return;
    }
    let half = n >>> 1;
    let k = 0;
    let item = this.arr[k]!;
    while (k < half) {
      let child = (k << 1) + 1;
      let object = this.arr[child]!;
      let right = child + 1;
      if (right < n && object[1] > this.arr[right]![1]) {
        object = this.arr[(child = right)]!;
      }
      if (item[1] < object[1]) {
        break;
      }
      this.arr[k] = object;
      k = child;
    }
    this.arr[k] = item;
  }

  private swim() {
    let n = this.arr.length - 1;
    if (n === 0) {
      return;
    }
    let item = this.arr[n]!;
    while (n > 0) {
      let parent = (n - 1) >>> 1;
      let e = this.arr[parent]!;
      if (item[1] > e[1]) {
        break;
      }
      this.arr[n] = e;
      n = parent;
    }
    this.arr[n] = item;
  }

  public add(value: [number, number]) {
    this.arr.push(value);
    this.swim();
  }

  public remove(): [number, number] {
    const res = this.arr[0]!;
    const n = this.arr.length;
    this.arr[0] = this.arr[n - 1]!;
    this.arr.splice(n - 1, 1);
    this.sink();
    return res;
  }

  public peek(): [number, number] {
    return this.arr[0]!;
  }
}
export function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]!)) {
      map.set(nums[i]!, map.get(nums[i]!)! + 1);
    } else {
      map.set(nums[i]!, 1);
    }
  }
  const answer: number[] = [];
  const list = [...map];
  const pq = new PQ();
  for (let i = 0; i < list.length; i++) {
    if (i < k) {
      pq.add(list[i]!);
    } else {
      if (list[i]![1] > pq.peek()[1]) {
        pq.remove();
        pq.add(list[i]!);
      }
    }
  }
  for (let i = 0; i < k; i++) {
    answer.push(pq.remove()[0]);
  }
  return answer;
}
