const map = function fakeMap<T, U>(
  this: T[],
  callbackfn: (value: T, index: number, array: T[]) => U,
  thisArg?: any
): U[] {
  let arr = this;
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.push(callbackfn.call(thisArg, arr[i]!, i, arr));
  }
  return answer;
};
