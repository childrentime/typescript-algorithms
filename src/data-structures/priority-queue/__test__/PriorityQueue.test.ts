import PriorityQueue from '../PriorityQueue';

describe('PriorityQueue', () => {
  it('should create empty priorityQueue', () => {
    const queue = new PriorityQueue<number>();
    expect(queue).not.toBeNull();
  });

  it('should check add and poll function', () => {
    const queue = new PriorityQueue<number>(
      10,
      (a: number, b: number) => b - a
    );
    queue.add(10);
    queue.add(100);
    queue.add(9);
    queue.add(3);
    queue.add(5000);
    queue.add(4);
    queue.add(40);
    expect(queue.poll()).toBe(5000);
    expect(queue.poll()).toBe(100);
    expect(queue.poll()).toBe(40);
    expect(queue.poll()).toBe(10);
    expect(queue.poll()).toBe(9);
    expect(queue.poll()).toBe(4);
    expect(queue.poll()).toBe(3);
    expect(queue.poll()).toBe(null);
    expect(queue.size()).toBe(0);
    expect(queue.empty()).toBe(true);
  });

  it('should check peek method', () => {
    const queue = new PriorityQueue<number>(
      10,
      (a: number, b: number) => a - b
    );
    queue.add(10);
    queue.add(100);
    expect(queue.peek()).toBe(10);
    expect(queue.peek()).toBe(10);
  });

  it('should check contains method', () => {
    const queue = new PriorityQueue<number>(
      10,
      (a: number, b: number) => a - b
    );
    queue.add(10);
    queue.add(100);
    expect(queue.contains(10)).toBe(true);
  });

  it('should check clear method', () => {
    const queue = new PriorityQueue<number>(
      10,
      (a: number, b: number) => a - b
    );
    queue.add(10);
    queue.add(100);
    expect(queue.empty()).toBe(false);
    queue.clear();
    expect(queue.empty()).toBe(true);
    expect(queue.poll()).toBe(null);
  });

  it('should check toArray method', () => {
    const queue = new PriorityQueue<number>(
      10,
      (a: number, b: number) => a - b
    );
    queue.add(10);
    queue.add(100);
    const array = queue.toArray();
    expect(array).toContain(10);
    expect(array).toContain(100);
  });

  it('should check iterator ', () => {
    const queue = new PriorityQueue<number>(
      10,
      (a: number, b: number) => a - b
    );
    queue.add(10);
    queue.add(100);
    let count = 0;
    for (const item of queue) {
      count += item;
    }
    expect(count).toBe(110);
  });

  it('should check grow built in', () => {
    const queue = new PriorityQueue<number>(1);
    queue.add(10);
    queue.add(100);
    queue.add(5000);
    queue.add(4);
    expect(queue.size()).toBe(4);
    queue.poll();
    queue.poll();
    queue.poll();
    queue.poll();
    expect(queue.size()).toBe(0);
  });

  it('should check toString', () => {
    const queue = new PriorityQueue<number>(1);
    queue.add(10);
    expect(queue.toString()).toBe('10');
  });
});
