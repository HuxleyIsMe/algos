const averagePair = (arr, avg) => {
  let left = 0;
  let right = arr.length - 1;
  let hasPair = false;

  while (left < right) {
    let sum = (arr[left] + arr[right]) / 2;
    if (sum === avg) {
      hasPair = true;
      break;
    }

    // if its smaller then we probs want a bigger number
    // as the list is sorted into size we know as we move right the
    // numbers increase. Therefore if we up the left pointer by one we can
    // get a larger number
    sum < avg ? left++ : right--; // here you incremented the right hand side instead of taking it down.
  }

  return hasPair;
};

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4));

/**
 * This is perfect well done this matches colt!
 */
