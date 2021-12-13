import LinkedListNode from './LinkedListNode';

export default class LinkedList<T> {
  private _size: number = 0;

  private first: LinkedListNode<T> | null = null;

  private last: LinkedListNode<T> | null = null;

  constructor() {}

  /**
   * Links e as first element.
   */
  private linkedfirst(item: T): void {
    const node = this.first;
    const newNode = new LinkedListNode<T>(null, item, node);
    this.first = newNode;
    if (node === null) {
      this.last = newNode;
    } else {
      node.prev = newNode;
    }
    this._size++;
  }

  private linkedLast(item: T): void {
    const node = this.last;
    const newNode = new LinkedListNode<T>(node, item, null);
    this.last = newNode;
    if (node === null) {
      this.first = newNode;
    } else {
      node.next = newNode;
    }
    this._size++;
  }

  private unlink(x: LinkedListNode<T>): T {
    const element = x.item;
    const next = x.next;
    const prev = x.prev;

    if (prev === null) {
      this.first = next;
    } else {
      prev.next = next;
      x.prev = null;
    }

    if (next === null) {
      this.last = prev;
    } else {
      next.prev = prev;
      x.next = null;
    }

    // @ts-ignore:
    x.item = null;

    this._size--;
    return element;
  }

  private unlinkFirst(x: LinkedListNode<T>): T {
    const element = x.item;
    const next = x.next;
    // @ts-ignore:
    x.item = null;
    x.next = null;
    this.first = next;
    if (next === null) {
      this.last = null;
    } else {
      next.prev = null;
    }
    this._size--;
    return element;
  }

  private unlinkLast(x: LinkedListNode<T>): T {
    const element = x.item;
    const prev = x.prev;
    // @ts-ignore:
    x.item = null;
    x.prev = null;
    this.last = prev;
    if (prev === null) {
      this.first = null;
    } else {
      prev.next = null;
    }
    this._size--;
    return element;
  }

  private linkBefore(element: T, succ: LinkedListNode<T>) {
    const prev = succ.prev;
    const newNode = new LinkedListNode<T>(prev, element, succ);
    succ.prev = newNode;
    if (prev === null) {
      this.first = newNode;
    } else {
      prev.next = newNode;
    }
    this._size++;
  }

  private isElementIndex(index: number): boolean {
    return index >= 0 && index < this._size;
  }

  private isPositonIndex(index: number): boolean {
    return index >= 0 && index <= this._size;
  }

  private checkElementIndex(index: number) {
    if (!this.isElementIndex(index)) {
      throw new Error(`index ${index} out of bound ${this._size}`);
    }
  }

  private checkPositionIndex(index: number) {
    if(!this.isPositonIndex(index)) {
      throw new Error(`index ${index} out of bound ${this._size}`);
    }
  }

  private node(index: number): LinkedListNode<T> {
    if (index < this._size >> 1) {
      let x = this.first;
      for (let i = 0; i < index; i++) {
        x = x!.next;
      }
      return x!;
    } else {
      let x = this.last;
      for (let i = this._size - 1; i > index; i--) {
        x = x!.prev;
      }
      return x!;
    }
  }

  public getFirst(): T {
    const node = this.first;
    if (node === null) {
      throw new Error('no such element');
    }
    return node.item;
  }

  public getLast(): T {
    const node = this.last;
    if (node === null) {
      throw new Error('no such element');
    }
    return node.item;
  }

  public get(index: number): T {
    this.checkElementIndex(index);
    return this.node(index).item;
  }

  /*
   * insert a element after the specified position: ;
   */
  public insert(index: number, element: T): void {
    this.checkPositionIndex(index);
    if (index === this._size) {
      this.linkedLast(element);
    } else {
      this.linkBefore(element, this.node(index));
    }
  }

  public addFirst(item: T): void {
    this.linkedfirst(item);
  }

  public addLast(item: T): void {
    this.linkedLast(item);
  }

  /*
   * Replaces the element at the specified position in this list with the
   * specified element.
   * @return the element previously at the specified position
   */
  public set(index: number, item: T): T {
    this.checkElementIndex(index);
    const x = this.node(index);
    const oldValue = x.item;
    x.item = item;
    return oldValue;
  }

  public remove(item: T): boolean {
    for (let x = this.first; x !== null; x = x.next) {
      if (item === x.item) {
        this.unlink(x);
        return true;
      }
    }
    return false;
  }

  public removeFirst(): T {
    const node = this.first;
    if (node === null) {
      throw new Error('no such element');
    }
    return this.unlinkFirst(node);
  }

  public removeLast(): T {
    const node = this.last;
    if (node === null) {
      throw new Error('no such element');
    }
    return this.unlinkLast(node);
  }

  public contains(item: T): boolean {
    return this.indexOf(item) !== -1;
  }

  public indexOf(item: T): number {
    let index = 0;
    for (let x = this.first; x !== null; x = x.next) {
      if (x.item === item) {
        return index;
      }
      index++;
    }
    return -1;
  }

  public lastIndexOf(item: T): number {
    let index = this._size;
    for (let x = this.last; x !== null; x = x.prev) {
      index--;
      if (x.item === item) {
        return index;
      }
    }
    return -1;
  }

  public clear(): void {
    for (let x = this.first; x !== null; ) {
      let next = x.next;
      // @ts-ignore:
      x.item = null;
      x.next = null;
      x.prev = null;
      x = next;
    }
    this.first = this.last = null;
    this._size = 0;
  }

  public size(): number {
    return this._size;
  }

  public toArray(): Array<T> {
    const array = new Array<T>();
    for (let x = this.first; x !== null; x = x.next) {
      array.push(x.item);
    }
    return array;
  }

  public toString(): string {
    return this.toArray().toString();
  }

  public empty(): boolean {
    return this._size === 0;
  }
}
