const bubbleSort = (arr) => {
  for (var o = 0; o < arr.length - 1; o++) {
    for (var i = 0; i < arr.length - 1 - o; i++) {
      let current = arr[i];
      let next = arr[i + 1];
      if (next < current) {
        let temp = current;
        arr[i] = next;
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([6, 7, 3, 2, 5, 1, 6, 77, 21, 42, 56, 11]));
