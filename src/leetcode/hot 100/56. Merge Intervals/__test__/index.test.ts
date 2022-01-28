import { merge } from '../firstSubmission';

describe('Merge Intervals', () => {
  it('should have corrent output', () => {
    let arr = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18]
    ];
    const output = merge(arr);
    expect(output).toEqual([
      [1, 6],
      [8, 10],
      [15, 18]
    ]);
    arr = [
      [1, 4],
      [0, 4]
    ];
    expect(merge(arr)).toEqual([[0, 4]]);
  });
});
