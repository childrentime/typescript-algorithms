const deepCopy = (obj: any) => {
  if (typeof obj === 'object') {
    const newObj: any = obj instanceof Array ? [] : {};
    for (const key of Object.keys(obj)) {
      newObj[key] =
        typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
    return newObj;
  }
};
