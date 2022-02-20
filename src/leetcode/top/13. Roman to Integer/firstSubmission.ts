// 小的数字在大的数字右边，不过存在特例
export function romanToInt(s: string): number {
  const map = new Map<string, number>();
  map.set('IV', 4);
  map.set('IX', 9);
  map.set('XL', 40);
  map.set('XC', 90);
  map.set('CD', 400);
  map.set('CM', 900);
  const map2 = new Map<string, number>();
  map2.set('I', 1);
  map2.set('V', 5);
  map2.set('X', 10);
  map2.set('L', 50);
  map2.set('C', 100);
  map2.set('D', 500);
  map2.set('M', 1000);
  let answer = 0;

  const delMap = (): boolean => {
    for (const item of map.keys()) {
      if (s.startsWith(item)) {
        answer = answer + map.get(item)!;
        s = s.substring(item.length);
        return true;
      }
    }
    return false;
  };
  const delMap2 = (): void => {
    for (const item of map2.keys()) {
      if (s.startsWith(item)) {
        answer = answer + map2.get(item)!;
        s = s.substring(item.length);
        return;
      }
    }
  };
  while (s.length) {
    let flag = true;
    while (flag) {
      flag = delMap();
    }
    delMap2();
  }
  return answer;
}
