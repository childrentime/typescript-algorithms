class MyStorage {
  getItem(key) {
    const item = JSON.parse(localStorage.getItem(key)!);
    if (Date.now() > item.time) {
      localStorage.removeItem(key);
      return null;
    } else {
      return item.value;
    }
  }

  setItem(key, value, time) {
    localStorage.setItem(
      key,
      JSON.stringify({
        value,
        time: time ? Date.now() + time : ''
      })
    );
  }
}
