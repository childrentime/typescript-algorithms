// 使用双向链表 因为它删除一个结点的效率为O(1) 这个思想被称为 Dancing Links
class DancingLinks {
  public key: number;
  public value: number;
  public prev: DancingLinks | null;
  public next: DancingLinks | null;
  constructor(key?: number, value?: number) {
    this.key = key ?? 0;
    this.value = value ?? 0;
    this.prev = null;
    this.next = null;
  }
}
export class LRUCache {
  private _size: number = 0;
  private _capacity: number = 0;
  private _head: DancingLinks;
  private _tail: DancingLinks;
  private _map = new Map<number, DancingLinks>();

  constructor(capacity: number) {
    this._capacity = capacity;
    this._head = new DancingLinks();
    this._tail = new DancingLinks();
    this._head.next = this._tail;
    this._tail.prev = this._head;
  }

  get(key: number): number {
    if (this._map.has(key)) {
      const node = this._map.get(key)!;
      this.movetoHead(node);
      return node.value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    const node = this._map.get(key);
    if (node == null) {
      const newNode = new DancingLinks(key, value);
      this._map.set(key, newNode);
      this.addToHead(newNode);
      this._size++;
      if (this._size > this._capacity) {
        const tail = this.removeTail();
        this._map.delete(tail.key);
        this._size--;
      }
    } else {
      node.value = value;
      this.movetoHead(node);
    }
  }

  private removeTail(): DancingLinks {
    const node = this._tail.prev;
    this.remove(node!);
    return node!;
  }

  private movetoHead(node: DancingLinks) {
    this.remove(node);
    this.addToHead(node);
  }

  private remove(node: DancingLinks) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev!;
  }

  private addToHead(node: DancingLinks) {
    node.prev = this._head;
    node.next = this._head.next;
    this._head.next!.prev = node;
    this._head.next = node;
  }
}
