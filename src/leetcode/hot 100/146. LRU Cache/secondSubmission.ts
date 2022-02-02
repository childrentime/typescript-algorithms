class LRUCache {
  public max: number;
  public map: Map<number, number>;
  constructor(capacity: number) {
    this.max = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    if (this.map.has(key)) {
      let val = this.map.get(key)!;
      this.map.delete(key);
      this.map.set(key, val);
      return val;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.max === 0) return;
    if (this.map.has(key)) {
      this.map.delete(key);
    } else {
      if (this.max === this.map.size) {
        let minUseKey = this.map.keys().next().value;
        this.map.delete(minUseKey);
      }
    }
    this.map.set(key, value);
  }
}
