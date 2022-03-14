export const sequence = function <T extends Promise<any>[]>(arr: T) {
  return new Promise<T[]>(resolve => {
    const res: T[] = [];
    let seq = arr[0]!;
    for (let i = 1; i < arr.length; i++) {
      seq = seq.then(data => {
        res.push(data);
        return arr[i]!;
      });
    }
    seq.then(data => {
      res.push(data);
      resolve(res);
    });
  });
};

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const arr = [promise1, promise2, promise3];
sequence(arr).then(data => console.log(data));
