export default class LinkedListNode<T> {
  public item: T;
  public next: LinkedListNode<T>;
  public prev: LinkedListNode<T>;

  constructor(item: T, prev: LinkedListNode<T>, next: LinkedListNode<T>) {
    this.item = item;
    this.prev = prev;
    this.next = next;
  }
}
