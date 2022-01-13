export default function heapSort(arr: number[]): number[] {
  const pq = new PriorityQueue();
  arr.forEach(item => {
    pq.add(item);
  });
  const result: number[] = [];
  while (!pq.empty()) {
    result.push(pq.deleteMax());
  }
  return result;
}

/**
 * Proposition.  Largest key is a[0], which is root of binary tree
 * Parent of node at k is at k-1/2
 * Children of node at k are at 2k+1 and 2k+2
 */
class PriorityQueue {
  private _tree: number[] = [];
  private _size: number = 0;

  constructor(capacity?: number) {
    this._tree.length = capacity ?? 10;
  }

  // when key equal to zero,stop
  private swim(key: number) {
    while (key > 0) {
      const parentKey = ~~((key - 1) / 2);
      if (this._tree[key]! > this._tree[parentKey]!) {
        [this._tree[key], this._tree[parentKey]] = [
          this._tree[parentKey]!,
          this._tree[key]!
        ];
        key = parentKey;
      } else {
        break;
      }
    }
  }

  // 2k+1 && 2k+2 should less than or equal to this._size-1
  private sink(key: number) {
    let leftChild = (key << 1) + 1;
    let rightChild = leftChild + 1;
    while (rightChild <= this._size - 1) {
      const max =
        this._tree[leftChild]! < this._tree[rightChild]!
          ? rightChild
          : leftChild;
      if (this._tree[key]! < this._tree[max]!) {
        [this._tree[key], this._tree[max]] = [
          this._tree[max]!,
          this._tree[key]!
        ];
        key = max;
        leftChild = (key << 1) + 1;
        rightChild = leftChild + 1;
      } else {
        break;
      }
    }

    // single left handle
    if (this._tree[key]! < this._tree[leftChild]!) {
      [this._tree[key], this._tree[leftChild]] = [
        this._tree[leftChild]!,
        this._tree[key]!
      ];
    }
  }

  public add(key: number): void {
    this._tree[this._size] = key;
    this._size++;
    if (this._size !== 1) {
      this.swim(this._size - 1);
    }
  }

  public deleteMax(): number {
    if (this._size === 0) {
      throw new Error('queue is empty');
    }
    const result = this._tree[0]!;
    this._tree[0] = this._tree[this._size - 1]!;
    this._tree.splice(this._size - 1, 1);
    this._size--;
    this.sink(0);
    return result;
  }

  public empty(): boolean {
    return this._size === 0;
  }

  public size(): number {
    return this._size;
  }
}
