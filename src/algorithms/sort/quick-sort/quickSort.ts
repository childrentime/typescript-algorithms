export function quickSort(arr: any[]): any[] {
  if (arr.length <= 1) {
    return arr;
  }
  const left = [];
  const right = [];
  const midIndex = Math.floor(arr.length / 2);
  const mid = arr[midIndex];
  for (let i = 0; i < arr.length; i++) {
    if (i === midIndex) {
      continue;
    }
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([mid], quickSort(right));
}

// 双指针+利用基准位
export function quickSort2(arr: any[], left: number, right: number): void {
  if (left >= right) {
    return;
  }

  let l = left;
  let r = right;
  let x = arr[l];
  while (l < r) {
    while (l < r && x <= arr[r]) {
      r--;
    }

    arr[l] = arr[r];

    while (l < r && x > arr[l]) {
      l++;
    }

    arr[r] = arr[l];
  }

  arr[l] = x;

  quickSort2(arr, left, l - 1);
  quickSort2(arr, l + 1, right);
}
