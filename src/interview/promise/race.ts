Promise.race = function <T extends Promise<T>[]>(promises: T) {
  return new Promise<T>((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(resolve, reject);
    });
  });
};
