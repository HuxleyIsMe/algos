const findPair = (arr, n) => {
  let left = 0;
  let right = arr.length - 1;

  let hasPairWithDiff = false;

  console.log(right, arr[right]);

  while (left < right) {
    let leftVal = arr[left];
    let rightVal = arr[right];
    let diff = Math.max(leftVal, rightVal) - Math.min(leftVal, rightVal);

    if (diff === n) {
      hasPairWithDiff = true;
      return true;
    }
    left++;

    if (left === right) {
      right--;
      left = 0;
    }
  }
  console.log("finishing up");
  return hasPairWithDiff;
};

console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1));

// work left to right

// this works but its not the two pointer techniqe
// we can use maths ab instead of the math max and math min

// nearly so yours in correct but colt sorted his then used the technique
// sorting first would make it easier to resolve this with two pointers
