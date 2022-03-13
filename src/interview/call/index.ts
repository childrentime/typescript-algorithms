function MyFunction(this: any, name: string) {
  this.name = name;
}
Function.prototype.call = function <T extends object, A extends any[], R>(
  this: (this: T, ...args: A) => R,
  thisArg: T,
  args: A
): R {
  const context: any = thisArg || window;
  const fn = Symbol('fn');
  context[fn] = this;
  let result = context[fn](args);
  delete context[fn];
  return result;
};
