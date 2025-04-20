const selectionSort = (arr) => {
  for (var o = 0; o <= arr.length - 1; o++) {
    let minValueIndex = o;
    for (var i = o + 1; i < arr.length; i++) {
      if (arr[i] < arr[minValueIndex]) {
        minValueIndex = i;
      }
    }
    let temp = arr[o];
    arr[o] = arr[minValueIndex];
    arr[minValueIndex] = temp;
  }

  return arr;
};

console.log(selectionSort([6, 7, 3, 2, 5, 344, 22, 11, 5, 65, 3, 21, 99, 43]));

/**
 * The above is incorrect lets step through to work out why
 *
 * 1)
 * minIndex = 0
 * o = 0
 *  i = 1
 *    arr[1] <  arr[0] ?? 7 < 6? continue
 *    arr[2] < arr[0] ?? 3 < 6 continue
 *              minIndex = 2
 *    arr[3] < arr[2] ??  2 < 3
 *              minIndex = 3
 *    arr[4] < arr[3] ?? 5 < 2 continue
 *
 * minIndex = 3
 *  temp = arr[o] = arr[1] = 6
 *  arr[0] =  arr[3]  [0] = 2
 *  arr[3] = temp so should look like [2,7,3,6,5]
 *
 *
 *
 *
 * Ok so you stepped your way through this and worked it out, you were not resetting the min value index that caused this
 * chaos. Another fundamental struggle your having is the end clauses. The outer function stops at the last index. where as the inner
 * doesnt. this is because you start the inner at 1. so its already starting from a higher point - is this correct?,
 *
 *
 */
