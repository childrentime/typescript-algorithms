// 正数右边 负数左边 保持各自的相对顺序
const array = [2, -3, 4, -5, -7, -8, 42, 423, 543, 543, -20, -43, -43];
const format = (arr: number[]) => {
  let head = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]! < 0) {
      [arr[i], arr[head]] = [arr[head]!, arr[i]!];
      head++;
    }
  }

  console.log(arr);

  let tail = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]! >= 0) {
      [arr[i], arr[tail]] = [arr[tail]!, arr[i]!];
      tail--;
    }
  }
};
format(array);
console.log(array);
