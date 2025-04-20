/**
 * Smallest to greatest
 * largest values will bubble to the top
 *
 * loop through list of values
 * check current is greater or less then next if greater swap
 * else continue
 *
 * continue until the original left pointer has reached the end?
 */

//

const bubbleSort = (arr) => {
  let current = 0;
  let next = 1;

  while (current <= arr.length - 1) {
    if (arr[current] > arr[next]) {
      let temp = arr[next];
      arr[next] = arr[current];
      arr[current] = temp;
      current = 0;
      next = 1;
    } else {
      current++;
      next++;
    }
  }

  return arr;
};

console.log(bubbleSort([6, 2, 7, 9, 3])); // 2,3,6,7,9
