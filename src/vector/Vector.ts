export default class Vector<T> {
  protected elementData: T[];
  /*The number of valid components in this Vector object.
   *Components elementData[0] through elementData[elementCount-1] are the actual items.
   */
  protected elementCount: number = 0;
  /**
   * The amount by which the capacity of the vector is automatically
   * incremented when its size becomes greater than its capacity.  If
   * the capacity increment is less than or equal to zero, the capacity
   * of the vector is doubled each time it needs to grow.
   */
  protected capacityIncrement: number;

  constructor(initialCapacity?: number, capacityIncrement?: number) {
    const cap = initialCapacity ?? 10;
    const inc = capacityIncrement ?? 0;
    if (cap < 0) {
      throw new Error(`Illegal Capacity: ${initialCapacity}`);
    }
    this.elementData = new Array<T>(cap);
    this.capacityIncrement = inc;
  }

  public capacity(): number {
    return this.elementData.length;
  }

  public size(): number {
    return this.elementCount;
  }

  public isEmpty(): boolean {
    return this.elementCount == 0;
  }

  public firstElement(): T {
    if (this.elementCount == 0) {
      throw new Error('no such element');
    }
    return <T>this.elementData[0];
  }

  public lastElement(): T {
    if (this.elementCount == 0) {
      throw new Error('no such element');
    }
    return <T>this.elementData[this.elementCount - 1];
  }

  public elementAt(index: number): T {
    if (index >= this.elementCount) {
      throw new Error(`element index ${index} out of ${this.elementCount}`);
    }
    return <T>this.elementData[index];
  }

  public setElementAt(obj: T, index: number): void {
    if (index >= this.elementCount) {
      throw new Error(`element index ${index} out of ${this.elementCount}`);
    }
    this.elementData[index] = obj;
  }

  public addElement(obj: T): void {
    this.ensureCapacityHelper(this.elementCount + 1);
    this.elementData[this.elementCount++] = obj;
  }

  public insertElementAt(obj: T, index: number) {
    if (index > this.elementCount) {
      throw new Error(`element index ${index} out of ${this.elementCount}`);
    }
    this.ensureCapacityHelper(this.elementCount + 1);
    this.elementData.splice(index, 1, obj);
    this.elementCount++;
  }

  public removeElementAt(index: number): void {
    if (index >= this.elementCount) {
      throw new Error(`element index ${index} out of ${this.elementCount}`);
    } else if (index < 0) {
      throw new Error(`element index ${index} out of ${this.elementCount}`);
    }
    this.elementData.splice(index, 1);
    this.elementCount--;
  }

  /*
   ** just remove first index element
   */
  public removeElement(obj: T): boolean {
    let i = this.indexOf(obj);
    if (i >= 0) {
      this.removeElementAt(i);
      return true;
    } else {
      return false;
    }
  }

  public removeAllElements(): void {
    this.elementData.splice(0);
    this.elementCount = 0;
  }

  private ensureCapacityHelper(minCapacity: number): void {
    if (minCapacity - this.elementData.length > 0) this.grow(minCapacity);
  }

  private grow(minCapacity: number): void {
    const oldCapacity = this.elementData.length;
    let newCapacity =
      oldCapacity +
      (this.capacityIncrement > 0 ? this.capacityIncrement : oldCapacity);
    if (newCapacity - minCapacity < 0) newCapacity = minCapacity;
    if (!Number.isSafeInteger(newCapacity)) {
      throw new Error('Maximum capacity reached');
    }
    this.elementData.length = newCapacity;
  }

  public toString(): string {
    return this.elementData.filter(item => item).toString();
  }

  public [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        return {
          done: i == this.elementCount,
          value: <T>this.elementData[i++]
        };
      }
    };
  }

  public clone(): Vector<T> {
    const vector = new Vector<T>();
    vector.elementData = this.elementData.slice();
    vector.elementCount = this.elementCount;
    vector.capacityIncrement = this.capacityIncrement;
    return vector;
  }

  public indexOf(obj: T, index?: number): number {
    const ind = index ?? 0;
    return this.elementData.indexOf(obj, ind);
  }

  public contains(obj: T): boolean {
    return this.indexOf(obj) >= 0;
  }

  public lastIndexOf(obj: T, index?: number): number {
    const ind = index ?? this.elementCount;
    return this.elementData.lastIndexOf(obj, ind);
  }
}
