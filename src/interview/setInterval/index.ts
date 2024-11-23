function setIntervalUsingTimeout(callback, interval) {
  let timeoutId;

  function repeat() {
    callback();
    timeoutId = setTimeout(repeat, interval);
  }

  timeoutId = setTimeout(repeat, interval);

  // 返回一个清除定时器的函数
  return function clearIntervalUsingTimeout() {
    clearTimeout(timeoutId);
  };
}
