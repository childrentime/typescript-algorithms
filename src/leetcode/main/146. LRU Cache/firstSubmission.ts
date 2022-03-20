class DancingLinks {
  key: number;
  value: number;
  prev: DancingLinks | null = null;
  next: DancingLinks | null = null;
  constructor(key?: number, value?: number) {
    this.key = key ?? 0;
    this.value = value ?? 0;
  }
}
export class LRUCache {
  head: DancingLinks;
  tail: DancingLinks;
  capacity: number;
  map: Map<number, DancingLinks>;
  size: number = 0;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map<number, DancingLinks>();
    this.head = new DancingLinks();
    this.tail = new DancingLinks();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (!node) {
      return -1;
    }
    this.movetoHead(node);
    return node.value;
  }

  put(key: number, value: number): void {
    const node = this.map.get(key);
    if (node) {
      node.value = value;
      this.movetoHead(node);
    } else {
      const newNode = new DancingLinks(key, value);
      this.addtoHead(newNode);
      this.map.set(key, newNode);
      this.size++;
      if (this.size > this.capacity) {
        const node = this.removeTail();
        this.map.delete(node.key);
        this.size--;
      }
    }
  }

  removeNode(node: DancingLinks) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  movetoHead(node: DancingLinks) {
    this.removeNode(node);
    this.addtoHead(node);
  }

  addtoHead(node: DancingLinks) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  removeTail(): DancingLinks {
    const node = this.tail.prev!;
    this.removeNode(node);
    return node;
  }
}
