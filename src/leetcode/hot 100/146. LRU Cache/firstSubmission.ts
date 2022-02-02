// LRU算法 最近最少使用
// 要使得 put 和 get 方法为O(1) 应该用map
// 要淘汰最少使用 应该淘汰栈底元素 这样的时间复杂度为 O(n)
export class LRUCache {
  private _map = new Map<number, number>();

  private _stack: number[] = [];

  private _capacity: number = 0;

  private _size: number = 0;

  constructor(capacity: number) {
    this._capacity = capacity;
  }

  get(key: number): number {
    if (this._map.has(key)) {
      let index = this._stack.indexOf(key);
      this._stack.splice(index, 1);
      this._stack.push(key);
      return this._map.get(key)!;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    if (this._map.has(key)) {
      let index = this._stack.indexOf(key);
      this._stack.splice(index, 1);
      this._stack.push(key);
    } else if (this._size < this._capacity) {
      this._stack.push(key);
      this._size++;
    } else {
      let v = this._stack.splice(0, 1)[0]!;
      this._stack.push(key);
      this._map.delete(v);
    }
    this._map.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
