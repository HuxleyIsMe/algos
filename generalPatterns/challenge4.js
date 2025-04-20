/**
 * find the duplicated numbers
 */
const findDuplicates = (positiveArray) => {
  let numbersLib = {};
  let duplicates = [];

  positiveArray.forEach((number) => {
    if (numbersLib[number]) {
      duplicates.push(number);
    } else {
      numbersLib[number] = 1;
    }
  });

  return duplicates;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([4, 3, 2, 1, 0]));
console.log(findDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));
