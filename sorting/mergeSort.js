const mergeHelper = (arr1, arr2) => {
  let nextArray = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      nextArray.push(arr1.shift());
    } else {
      nextArray.push(arr2.shift());
    }
  }

  return [...nextArray, ...arr1, ...arr2];
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  console.log(left, right);

  return mergeHelper(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([4, 5, 1, 2, 8, 11, 23]));

/**
 * Ok cool beans we seem to have merge sort down but we still dont understand the 'easy' ones of insertion and selection sort.
 */
