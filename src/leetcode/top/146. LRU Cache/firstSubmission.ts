class DancingLinks {
  key: number;
  val: number;
  prev: DancingLinks | null;
  next: DancingLinks | null;
  constructor(
    key: number = 0,
    val: number = 0,
    prev?: DancingLinks,
    next?: DancingLinks
  ) {
    this.key = key;
    this.val = val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
  }
}

export class LRUCache {
  private _map = new Map<number, DancingLinks>();
  private _capacity: number;
  private _head: DancingLinks = new DancingLinks();
  private _tail: DancingLinks = new DancingLinks();
  private _size: number = 0;
  constructor(capacity: number) {
    this._capacity = capacity;
    this._head.next = this._tail;
    this._tail.prev = this._head;
  }

  get(key: number): number {
    const node = this._map.get(key);
    if (!node) {
      return -1;
    }
    this.movetoHead(node);
    return node.val;
  }

  put(key: number, value: number): void {
    const node = this._map.get(key);
    if (node) {
      node.val = value;
      this.movetoHead(node);
    } else {
      const node = new DancingLinks(key, value);
      this._map.set(key, node);
      this.addtoHead(node);
      this._size++;
      if (this._size > this._capacity) {
        const tail = this.removeTail();
        this._map.delete(tail.key);
        this._size--;
      }
    }
  }

  private removeTail() {
    const node = this._tail.prev!;
    this.remove(node);
    return node;
  }

  private movetoHead(node: DancingLinks) {
    this.remove(node);
    this.addtoHead(node);
  }

  private remove(node: DancingLinks) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private addtoHead(node: DancingLinks) {
    node.next = this._head.next;
    node.prev = this._head;
    this._head.next!.prev = node;
    this._head.next = node;
  }
}
