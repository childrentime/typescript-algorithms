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

export function quickSort3(arr: number[], left: number, right: number) {
  const partition = (left: number, right: number) => {
    const x = arr[left]!;
    while (left < right) {
      while (left < right && x <= arr[right]!) {
        right--;
      }
      arr[left] = arr[right]!;
      while (left < right && x >= arr[left]!) {
        left++;
      }
      arr[right] = arr[left]!;
    }
    arr[left] = x;
    return left;
  };

  const stack: number[] = [];
  stack.push(left, right);
  while (stack.length) {
    const r = stack.pop()!;
    const l = stack.pop()!;
    const index = partition(l, r);
    if (index - 1 > l) {
      stack.push(l);
      stack.push(index - 1);
    }
    if (index + 1 < r) {
      stack.push(index + 1);
      stack.push(r);
    }
  }
}
