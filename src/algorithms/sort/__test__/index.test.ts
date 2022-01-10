import insertSort from '../insertSort';
import mergeSort from '../mergeSort';
import { quickSort, quickSort2 } from '../quickSort';
import selectSort from '../selectSort';
import shellSort from '../shellSort';

describe('Sort', () => {
  it('QuickSort', () => {
    const array = [5, 3, 1, 2, 4];
    expect(quickSort(array).toString()).toBe('1,2,3,4,5');

    quickSort2(array, 0, 4);

    expect(array.toString()).toBe('1,2,3,4,5');
  });

  it('SelectSort', () => {
    const array = [5, 3, 1, 2, 4];
    selectSort(array);
    expect(array.toString()).toBe('1,2,3,4,5');
  });

  it('InsertSort', () => {
    const array = [5, 3, 1, 2, 4];
    insertSort(array);
    expect(array.toString()).toBe('1,2,3,4,5');
  });

  it('shellSort', () => {
    const array = [5, 3, 1, 2, 4];
    shellSort(array);
    expect(array.toString()).toBe('1,2,3,4,5');
  });

  it('mergeSort', () => {
    const array = [5, 3, 1, 2, 4];
    mergeSort(array);
    expect(array.toString()).toBe('1,2,3,4,5');
  });
});
