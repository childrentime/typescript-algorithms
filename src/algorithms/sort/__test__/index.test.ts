import heapSort from '../heapSort';
import insertSort from '../insertSort';
import mergeSort from '../mergeSort';
import { quickSort, quickSort2, quickSort3 } from '../quickSort';
import selectSort from '../selectSort';
import shellSort from '../shellSort';

describe('Sort', () => {
  it('QuickSort', () => {
    const array = [5, 3, 1, 2, 4];
    expect(quickSort(array).toString()).toBe('1,2,3,4,5');

    quickSort2(array, 0, 4);

    expect(array.toString()).toBe('1,2,3,4,5');

    const arr = [
      9, 100, 1000, 5, 4, 43254, 543, 5342, 5324, 543, 523, 1, 4312, 4123, 4123,
      45321, 532432
    ];
    quickSort3(arr, 0, arr.length - 1);
    expect(arr.toString()).toBe(
      '1,4,5,9,100,523,543,543,1000,4123,4123,4312,5324,5342,43254,45321,532432'
    );
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

  it('heapSort', () => {
    const array = [5, 3, 1, 2, 4];
    const result = heapSort(array);
    expect(result.toString()).toBe('5,4,3,2,1');
    const arr = [5, 3, 1, 2, 4, 7, 9, 6, 8, 10];
    const res = heapSort(arr);
    expect(res.toString()).toBe('10,9,8,7,6,5,4,3,2,1');
  });
});
