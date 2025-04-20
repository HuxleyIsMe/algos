/**
 * Here we must use the sliding window technique
 *
 *
 *
 */

// maximun sum of a subarray of the length of the window rovided
const maxSubarray = (arr, windowLength) => {
  let firstWindow = arr.slice(0, windowLength);
  let maxSum = firstWindow.reduce((acc, curr) => (acc += curr));

  for (var i = 1; i <= arr.length - windowLength; i++) {
    let next = i + windowLength - 1;
    console.log({ next });

    firstWindow.shift();
    firstWindow.push(arr[next]);

    let sum = firstWindow.reduce((acc, curr) => (acc += curr));

    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
};

console.log(maxSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

// hux there is no need for this new array, remove the start value from the total and add
// the next val

const maxSubarray2 = (arr, windowLength) => {
  let firstWindow = arr.slice(0, windowLength);
  let maxSum = firstWindow.reduce((acc, curr) => (acc += curr));

  for (var i = 1; i <= arr.length - windowLength; i++) {
    let next = i + windowLength - 1;

    let sum = maxSum;

    sum -= arr[i - 1]; // remove previous
    sum += arr[next];

    // could just     total = Math.max(total, currentTotal);
    maxsum = Math.max(sum, maxSum);
  }
  return maxSum;
};

console.log(maxSubarray2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

// the to apprach works kinda if you want the  values but its arguable better to have an object with a key instead
