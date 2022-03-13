Promise.all = function <T extends Promise<T>[]>(promises: T) {
  return new Promise<T[]>((resolve, reject) => {
    let result: T[] = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]!.then(
        data => {
          result[i] = data;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        },
        error => {
          reject(error);
        }
      );
    }
  });
};
