import Stack from '../Stack';

describe('Stack', () => {
  it('should create empty stack', () => {
    const stack = new Stack();
    expect(stack.empty()).toBe(true);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.toString()).toBe('');
  });

  it('should stack data to stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.toString()).toBe('1,2');
  });

  it('should peek data from stack', () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow('empty stack');
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it('should check if stack is empty', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);

    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
  });

  it('should pop data from stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(() => stack.pop()).toThrow('empty stack');
    expect(stack.isEmpty()).toBe(true);
  });

  it('should be possible to push/pop objects', () => {
    const stack = new Stack<{ key: string; value: string }>();

    stack.push({ value: 'test1', key: 'key1' });
    stack.push({ value: 'test2', key: 'key2' });

    expect(stack.pop().value).toBe('test2');
    expect(stack.pop().value).toBe('test1');
  });

  it('should check search function', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.search(3)).toBe(2);
    expect(stack.search(4)).toBe(1);
    expect(stack.search(5)).toBe(-1);
  });
});
