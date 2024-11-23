function bind(func, context) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    return func.call(context, ...args);
  };
}
