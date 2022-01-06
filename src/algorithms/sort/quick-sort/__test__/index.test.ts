import { quickSort, quickSort2 } from '../quickSort';

describe('QuickSort', () => {
  it('should sort correct', () => {
    const array = [5, 3, 1, 2, 4];
    expect(quickSort(array).toString()).toBe('1,2,3,4,5');

    quickSort2(array, 0, 4);

    expect(array.toString()).toBe('1,2,3,4,5');
  });
});
