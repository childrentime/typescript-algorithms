export function debounce<Args extends any[], F extends (...arg: Args) => any>(
  fn: F,
  wait: number = 500
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (timer) {
      clearTimeout(timer);
    }
    const context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

function sayHello() {
  console.log('hello world');
}

const debounceSayHello = debounce(sayHello);
debounceSayHello();
debounceSayHello();
debounceSayHello(); //hello world
