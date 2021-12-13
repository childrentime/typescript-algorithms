import LinkedList from '../../../data-structures/linked-list/LinkedList';

export default function traversal<T>(
  linkedList: LinkedList<T>,
  callback: (item: T) => void
) {
  const array = linkedList.toArray();
  array.forEach(callback);
}
