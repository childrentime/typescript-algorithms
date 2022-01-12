export function add(arr: number[], index: number, ...items: number[]): void {
  arr.splice(index, 0, ...items);
}

export function remove(
  arr: number[],
  index: number,
  deleteCount: number
): void {
  arr.splice(index, deleteCount);
}

export function replace(
  arr: number[],
  index: number,
  replaceCount: number,
  ...items: number[]
): void {
  arr.splice(index, replaceCount, ...items);
}
