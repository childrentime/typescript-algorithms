Promise.all = function <T extends Promise<any>[]>(promises: T) {
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

Promise.allWithTimeout = function <T extends Promise<any>[]>(
  promises: T,
  timeout: number
) {
  return new Promise<T[]>((resolve, reject) => {
    let result: T[] = [];
    let count = 0;
    let hasTimedOut = false;

    // Set a timeout for the overall Promise.all operation
    const timeoutId = setTimeout(() => {
      hasTimedOut = true;
      reject(new Error('Promise.all operation timed out'));
    }, timeout);

    for (let i = 0; i < promises.length; i++) {
      // Wrap each promise with a timeout
      const promiseWithTimeout = Promise.race([
        promises[i]!,
        new Promise((_, reject) => {
          setTimeout(() => {
            if (!hasTimedOut) {
              reject(new Error(`Promise timed out after ${timeout}ms`));
            }
          }, timeout);
        })
      ]);

      promiseWithTimeout.then(
        data => {
          result[i] = data;
          count++;
          if (count === promises.length) {
            clearTimeout(timeoutId);
            resolve(result);
          }
        },
        error => {
          clearTimeout(timeoutId);
          reject(error);
        }
      );
    }
  });
};
