import Vector from '../Vector';

describe('Vector', () => {
  it('should create empty vector with ten capacity', () => {
    const vector = new Vector();
    expect(vector).not.toBeNull();
    expect(vector.capacity()).toEqual(10);
    expect(vector.size()).toEqual(0);
    expect(vector.isEmpty()).toEqual(true);
  });

  it('should grow auto', () => {
    const vector = new Vector<number>(2);
    vector.addElement(1);
    vector.addElement(1);
    vector.addElement(1);
    vector.addElement(1);
    vector.addElement(1);
    expect(vector.capacity()).toEqual(8);
  });

  it('should store data to vector', () => {
    const vector = new Vector<number>();
    vector.addElement(1);
    vector.addElement(2);
    vector.addElement(3);
    expect(vector.toString()).toBe('1,2,3');
    let count = 0;
    for (const element of vector) {
      count = count + element;
    }
    expect(count).toEqual(6);
  });

  it('should remove data from vector', () => {
    const vector = new Vector<number>();
    vector.addElement(1);
    vector.addElement(2);
    vector.addElement(3);
    vector.removeElement(2);
    vector.removeElementAt(1);
    expect(vector.toString()).toBe('1');
  });

  it('should set data to vector', () => {
    const vector = new Vector<number>();
    vector.addElement(1);
    vector.setElementAt(100, 0);
    expect(vector.toString()).toBe('100');
  });

  it('should insert data into vector', () => {
    const vector = new Vector<number>();
    vector.insertElementAt(99, 0);
    expect(vector.toString()).toBe('99');
  });

  it('should check first element in vector', () => {
    const vector = new Vector<number>();
    vector.addElement(1);
    vector.addElement(2);
    expect(vector.firstElement()).toBe(1);
  });

  it('should check element at in vector', () => {
    const vector = new Vector<number>();
    vector.addElement(1);
    vector.addElement(2);
    expect(vector.elementAt(1)).toBe(2);
  });

  it('should check last element in vector', () => {
    const vector = new Vector<number>();
    vector.addElement(1);
    vector.addElement(2);
    expect(vector.lastElement()).toBe(2);
  });

  it('should check indexof in the vector', () => {
    const vector = new Vector<number>();
    vector.addElement(1);
    vector.addElement(2);
    vector.addElement(1);
    expect(vector.indexOf(1)).toEqual(0);
    expect(vector.indexOf(2)).toEqual(1);
    expect(vector.lastIndexOf(1)).toEqual(2);
  });

  it('should check remove element in vector', () => {
    const vector = new Vector<number>();
    vector.addElement(1);
    vector.addElement(2);
    vector.removeElement(1);
    expect(vector.removeElement(3)).toBe(false);
    expect(vector.toString()).toBe('2');
    vector.addElement(3);
    vector.removeElementAt(0);
    expect(vector.toString()).toBe('3');
    vector.addElement(4);
    vector.removeAllElements();
    expect(vector.toString()).toBe('');
    expect(vector.isEmpty()).toBe(true);
  });

  it('should check contains in vector', () => {
    const vector = new Vector<number>();
    vector.addElement(1);
    vector.addElement(2);
    expect(vector.contains(1)).toBe(true);
    expect(vector.contains(3)).toBe(false);
  });

  it('should check clone in vector', () => {
    const vector = new Vector<number>();
    vector.addElement(1);
    vector.addElement(2);
    const clone = vector.clone();
    expect(clone === vector).toBe(false);
    expect(clone.toString()).toEqual('1,2');
  });

  it('should check error handle', () => {
    const vector = new Vector<number>();
    expect(() => new Vector(-10, 1)).toThrow('Illegal Capacity: -10');
    expect(() => vector.firstElement()).toThrow('no such element');
    expect(() => vector.lastElement()).toThrow('no such element');
    expect(() => vector.elementAt(0)).toThrow('element index 0 out of 0');
    expect(() => vector.setElementAt(1, 0)).toThrow('element index 0 out of 0');
    expect(() => vector.insertElementAt(1, 1)).toThrow(
      'element index 1 out of 0'
    );
    expect(() => vector.removeElementAt(0)).toThrow('element index 0 out of 0');
    expect(() => vector.removeElementAt(-1)).toThrow(
      'element index -1 out of 0'
    );
  });
});
