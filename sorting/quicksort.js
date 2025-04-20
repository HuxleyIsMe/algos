/**
 * Quicksort is a funny ome it cares only about the current elemnt, its recursiver and works with a helper
 */

/**
 * Returns a left, right and a mid point
 * it should place the current index in the correct position
 */
const quickSortHelper = (arr, start = 0, end = arr.length) => {
  let startIndex = start;
  let value = arr[startIndex];
  let indexCounter = start;

  for (var i = 1; i < end; i++) {
    if (arr[i] < value) {
      indexCounter++;
      let smallerValue = arr[i];
      let largerValue = arr[indexCounter];
      arr[indexCounter] = smallerValue;
      arr[i] = largerValue;
    }
  }

  // now lets swap the beginning value to the correct location

  arr[start] = arr[indexCounter];
  arr[indexCounter] = value;

  return arr;
};

const quicksort = (arr, left = 0, right = arr.length + 1) => {
  if (left > right) {
    return arr;
  }

  let mid = quickSortHelper(arr, left, right);

  quicksort(arr, 0, mid);
  quicksort(arr, mid, arr.length);
};

console.log(quicksort([4, 5, 6, 2, 3])); // 42653 -> 42653
