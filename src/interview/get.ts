function get(obj, path, defaultValue) {
  const segments = Array.isArray(path) ? path : parsePath(path);
  let result = obj;

  for (const key of segments) {
    if (result == null) return defaultValue;
    result = result[key];
  }

  return result === undefined ? defaultValue : result;
}

function parsePath(path) {
  const segments = [];
  let segment = '';

  for (let i = 0; i < path.length; i++) {
    const char = path[i];

    if (char === '.') {
      if (segment) segments.push(segment);
      segment = '';
    } else if (char === '[') {
      if (segment) segments.push(segment);
      segment = '';
    } else if (char === ']') {
      if (segment) segments.push(segment);
      segment = '';
    } else {
      segment += char;
    }
  }

  if (segment) segments.push(segment);
  return segments;
}

// 测试
const obj = {
  a: {
    b: [{ c: 3 }]
  }
};

console.log(get(obj, 'a.b[0].c')); // 3
console.log(get(obj, ['a', 'b', '0', 'c'])); // 3
console.log(get(obj, 'x.y.z', 'default')); // 'default'
