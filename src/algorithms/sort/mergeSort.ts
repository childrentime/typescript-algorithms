export default function mergeSort(arr: number[]) {
  const aux = new Array(arr.length);
  for (let i = 1; i < arr.length; i <<= 1) {
    for (let left = 0; left < arr.length - i; left += i + i) {
      merge(
        arr,
        aux,
        left,
        left + i - 1,
        Math.min(left + i + i - 1, arr.length - 1)
      );
    }
  }
}

const merge = (
  arr: number[],
  aux: number[],
  left: number,
  mid: number,
  right: number
) => {
  for (let i = left; i <= right; i++) {
    aux[i] = arr[i]!;
  }

  let i = left;
  let j = left;
  let k = mid + 1;

  while (j <= mid && k <= right) {
    if (aux[j]! < aux[k]!) {
      arr[i] = aux[j]!;
      j++;
    } else {
      arr[i] = aux[k]!;
      k++;
    }
    i++;
  }

  while (j <= mid) {
    arr[i] = aux[j]!;
    j++;
    i++;
  }

  while (k <= right) {
    arr[i] = aux[k]!;
    k++;
    i++;
  }
};
