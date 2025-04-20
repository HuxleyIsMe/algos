const insertionSort = (arr) => {
  // the first place is correctyl sorted we are building the array left to right

  for (var o = 1; o < arr.length; o++) {
    for (var i = o; i > 0 && arr[i] < arr[i - 1]; i--) {
      if (arr[i] < arr[i - 1]) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
};

console.log(insertionSort([4, 5, 2, 7, 22, 65, 22, 11, 79, 32, 1, 5]));

//4
/**
 *
 * Ok you got here on the second time, you missed to small optimisations
 * outer should start from 1.
 * This is because we have to start somewhere, and in an array of one we are already sorted
 * you also missed you could exist the inner loop as soon as you began to find an element that was smaller.
 */
