const arr = [1, [2, 3], [[4, [5, 6]]], 7];
const str = arr.toString();
console.log(str);
// method1
let arr1 = arr.flat(Infinity);
console.log(arr1);

// method2
let arr2 = str.split(',').map(Number);
console.log(arr2);

//method3
const myFlat = (arr: any[]) => {
  const helper = (arr: any[]): any[] => {
    let res: any[] = [];
    for (const item of arr) {
      if (typeof item === 'object') {
        res.push(...item);
      } else {
        res.push(item);
      }
    }
    return res;
  };

  while (arr.some(item => typeof item === 'object')) {
    arr = helper(arr);
  }
  return arr;
};

let arr3 = myFlat(arr);
console.log(arr3);
