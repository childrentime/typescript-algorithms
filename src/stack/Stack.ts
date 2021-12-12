import Vector from '../vector/Vector';

export default class Stack<T> extends Vector<T> {
  constructor() {
    super();
  }

  public push(item: T): T {
    this.addElement(item);
    return item;
  }

  public peek() {
    const len = this.size();
    if (len === 0) {
      throw new Error('empty stack');
    }
    return this.elementAt(len - 1);
  }

  public pop(): T {
    const len = this.size();
    const obj = this.peek();
    this.removeElementAt(len - 1);
    return obj;
  }

  public empty(): boolean {
    return this.size() === 0;
  }

  public search(item: T): number {
    const i = this.lastIndexOf(item);
    if (i >= 0) {
      return this.size() - i;
    }
    return -1;
  }
}
