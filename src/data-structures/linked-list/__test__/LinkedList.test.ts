import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
    expect(linkedList.empty()).toBe(true);
  });

  it('should check getFirst and getLast methods', () => {
    const linkedList = new LinkedList();
    expect(() => linkedList.getFirst()).toThrow('no such element');
    expect(() => linkedList.getLast()).toThrow('no such element');
    linkedList.addFirst(1);
    linkedList.addFirst(2);
    expect(linkedList.getFirst()).toBe(2);
    expect(linkedList.getLast()).toBe(1);
  });

  it('should check get method', () => {
    const linkedList = new LinkedList();
    expect(() => linkedList.get(0)).toThrow('index 0 out of bound 0');
    linkedList.addFirst(1);
    linkedList.addFirst(2);
    expect(linkedList.get(0)).toBe(2);
    expect(linkedList.get(1)).toBe(1);
  });

  it('should check addFirst and addLast methods', () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(1);
    linkedList.addLast(2);
    expect(linkedList.getFirst()).toBe(1);
    expect(linkedList.getLast()).toBe(2);
  });

  it('should check add method', () => {
    const linkedList = new LinkedList<number>();
    linkedList.insert(0, 1);
    linkedList.insert(1, 1);
    linkedList.insert(2, 3);
    expect(linkedList.toString()).toBe('1,1,3');
    linkedList.insert(0,2)
    expect(linkedList.toString()).toBe('2,1,1,3')
    expect(() => linkedList.insert(8,3)).toThrow('index 8 out of bound 4')
  });

  it('should check set method', () => {
    const linkedList = new LinkedList();
    linkedList.addLast(1);
    linkedList.addLast(2);
    expect(linkedList.get(1)).toBe(2);
    linkedList.set(1, 10);
    expect(linkedList.getLast()).toBe(10);
  });

  it('should check remove methods', () => {
    const linkedList = new LinkedList();
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    linkedList.addLast(4);
    linkedList.addLast(5);
    linkedList.addLast(6);
    linkedList.removeFirst();
    linkedList.removeLast();
    expect(linkedList.getLast()).toBe(5);
    expect(linkedList.getFirst()).toBe(2);
    linkedList.remove(5);
    expect(linkedList.getLast()).toBe(4);
    linkedList.clear();
    expect(() => linkedList.removeFirst()).toThrow('no such element');
    expect(() => linkedList.removeLast()).toThrow('no such element');
  });

  it('should check contains method', () => {
    const linkedList = new LinkedList();
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    linkedList.addLast(4);
    linkedList.addLast(5);
    linkedList.addLast(6);
    expect(linkedList.contains(4)).toBe(true);
    expect(linkedList.contains(7)).toBe(false);
  });

  it('should check indexOf methods', () => {
    const linkedList = new LinkedList();
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(1);
    expect(linkedList.indexOf(2)).toBe(1);
    expect(linkedList.lastIndexOf(1)).toBe(2);
  });

  it('should check clear method', () => {
    const linkedList = new LinkedList();
    linkedList.addLast(1);
    linkedList.clear();
    expect(linkedList.toString()).toBe('');
  });

  it('should check size method', () => {
    const linkedList = new LinkedList();
    linkedList.addLast(1);
    expect(linkedList.size()).toBe(1);
    linkedList.addFirst(2);
    expect(linkedList.size()).toBe(2);
  });

  it('should check toArray method', () => {
    const linkedList = new LinkedList();
    linkedList.addLast(1);
    linkedList.addLast(2);
    expect(linkedList.toArray().join(',')).toBe('1,2');
  });

  it('should check empty method', () => {
    const linkedList = new LinkedList();
    expect(linkedList.empty()).toBe(true);
    linkedList.addLast(1);
    expect(linkedList.empty()).toBe(false);
  });
});
