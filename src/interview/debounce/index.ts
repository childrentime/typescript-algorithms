export function debounce<Args extends any[], F extends (...arg: Args) => any>(
  fn: F,
  wait: number = 500,
  immediate: boolean = false
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      if (!timer) {
        fn.apply(context, args);
      }
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
  };
}

const debounce = (fn, wait, immediate) => {
  let timer = null;
  return args => {
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      if (!timer) {
        fn(args);
      }
      timer = setTimeout(() => {
        timer = null;
      }, args);
    }
    timer = setTimeout(() => {
      fn(args);
    }, wait);
  };
};

function sayHello() {
  console.log('hello world');
}

const debounceSayHello = debounce(sayHello, 3000, true);
debounceSayHello();
debounceSayHello();
debounceSayHello(); //hello world
