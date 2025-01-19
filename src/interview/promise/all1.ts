const all1 = (promises: Promise<any>[]) => {
  let result: any[] = [];
  let count = 0;
  return new Promise(resolve => {
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i]!;
      promise.then(res => {
        count++;
        result[i] = res;
        if (count === promises.length) {
          resolve(result);
        }
      });
    }
  });
};
