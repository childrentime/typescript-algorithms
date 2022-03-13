function _new<Args extends any[], F extends (...args: Args) => any>(
  fn: F,
  ...args: Args
) {
  const object = Object.create(fn.prototype);
  const result = fn.apply(object, args);
  return result instanceof Object ? result : object;
}

function Person(this: any, name: string) {
  this.name = name;
}

function SB(this: any, name: string) {
  this.name = name;
}

const person = _new(Person, 'zhangsan');
console.log(person); //Person { name: 'zhangsan' }
const sb = _new(SB, 'lisi');
console.log(sb); //{}
