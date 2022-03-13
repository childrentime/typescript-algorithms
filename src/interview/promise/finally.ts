Promise.prototype.finally = function <T>(callback: () => void): Promise<T> {
  return this.then(
    value => Promise.resolve(callback()).then(() => value),
    err =>
      Promise.resolve(callback()).then(() => {
        throw err;
      })
  );
};
