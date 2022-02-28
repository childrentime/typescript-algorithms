export default class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(
    val?: number,
    left?: Node | null,
    right?: Node | null,
    next?: Node | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}
