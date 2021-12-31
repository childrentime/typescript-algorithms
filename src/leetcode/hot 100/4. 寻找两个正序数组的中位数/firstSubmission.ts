import PriorityQueue from '../../../data-structures/priority-queue/PriorityQueue';

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const queue = new PriorityQueue<number>(
    1000000,
    (a: number, b: number) => a - b
  );
  nums1.forEach(item => {
    queue.add(item);
  });
  nums2.forEach(item => {
    queue.add(item);
  });

  const mergedArray: number[] = [];
  while (!queue.empty()) {
    mergedArray.push(<number>queue.poll());
  }

  const length = mergedArray.length / 2;
  if (!Number.isInteger(length)) {
    return mergedArray[Math.floor(length)] as number;
  }

  return (<number>mergedArray[length] + <number>mergedArray[length - 1]) / 2;
}
