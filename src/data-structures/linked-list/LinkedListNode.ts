export default class LinkedListNode<T> {
  public item: T;
  public next: LinkedListNode<T> | null ;
  public prev: LinkedListNode<T> | null ;

  constructor( prev: LinkedListNode<T> | null,item: T, next: LinkedListNode<T> | null) {
    this.item = item;
    this.prev = prev;
    this.next = next;
  }
}
