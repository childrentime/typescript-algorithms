export function findKthLargest(nums: number[], k: number): number {
  const pq = new PriorityQueue();
  nums.forEach(item => {
    pq.add(item);
  });
  for (let i = 0; i < k - 1; i++) {
    pq.deleteMax();
  }

  return pq.deleteMax();
}

class PriorityQueue {
  private _array: number[] = [];
  private _size: number = 0;

  private swim(k: number) {
    while (k > 0) {
      const parent = (k - 1) >> 1;
      if (this._array[k]! > this._array[parent]!) {
        [this._array[k], this._array[parent]] = [
          this._array[parent]!,
          this._array[k]!
        ];
        k = parent;
      } else {
        break;
      }
    }
  }

  private sink(k: number) {
    let left = (k << 1) + 1;
    let right = left + 1;
    while (right <= this._size - 1) {
      const max = this._array[left]! > this._array[right]! ? left : right;
      if (this._array[k]! < this._array[max]!) {
        [this._array[k], this._array[max]] = [
          this._array[max]!,
          this._array[k]!
        ];
        k = max;
        left = (k << 1) + 1;
        right = left + 1;
      } else {
        break;
      }
    }
    if (this._array[k]! < this._array[left]!) {
      [this._array[k], this._array[left]] = [
        this._array[left]!,
        this._array[k]!
      ];
    }
  }

  constructor() {}

  public add(item: number): void {
    this._array[this._size] = item;
    this._size++;
    if (this._size !== 1) {
      this.swim(this._size - 1);
    }
  }

  public deleteMax(): number {
    const result = this._array[0]!;
    this._array[0] = this._array[this._size - 1]!;
    this._array.splice(this._size - 1, 1);
    this._size--;
    this.sink(0);
    return result;
  }
}
