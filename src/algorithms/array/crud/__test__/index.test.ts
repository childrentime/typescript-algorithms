import { add, remove, replace } from '..';

describe('Array', () => {
  it('add', () => {
    const array = [1, 2, 3];
    add(array, 3, 1);
    expect(array.toString()).toBe('1,2,3,1');
    add(array, 4, 4, 5, 6);
    expect(array.toString()).toBe('1,2,3,1,4,5,6');
  });

  it('delete', () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    remove(array, 8, 2);
    expect(array.toString()).toBe('0,1,2,3,4,5,6,7');
  });

  it('replace', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    replace(array, 4, 3, 9);
    expect(array.toString()).toBe('0,1,2,3,9');
  });
});
