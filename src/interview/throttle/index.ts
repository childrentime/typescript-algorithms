export function throttle<Args extends any[], F extends (...args: Args) => any>(
  fn: F,
  wait: number = 500
) {
  let canRun = true;
  return function (this: ThisParameterType<F>, ...args: Args) {
    if (!canRun) {
      return;
    }
    const context = this;
    canRun = false;
    setTimeout(() => {
      fn.apply(context, args);
      canRun = true;
    }, wait);
  };
}

const throttle = (fn, wait) => {
  let canRun = true;
  return args => {
    if (!canRun) {
      return;
    }
    canRun = false;
    setTimeout(() => {
      fn(args);
      canRun = true;
    }, wait);
  };
};

function sayHello() {
  console.log('Hello!');
}

const throttleSayHello = throttle(sayHello, 5);
throttleSayHello();
setTimeout(() => {
  throttleSayHello();
}, 10); //hello hello
