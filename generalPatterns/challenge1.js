/**
 * Frequency Counter
 *
 * So this is the idea of relying on the lookup ability of objects
 * of using them as charters and accountants to work out how much and object is.
 *
 * Be ware if you use and indexOF thats commonly an indication you can
 * turn to this kinda pattern.
 *
 */

/**
 * Finds wether both numbers have the same frequency of digits
 * @param {int} num1
 * @param {int} num2
 */
const sameFrequency = (num1, num2) => {
  const arr1 = num1.toString().split("");
  const arr2 = num2.toString().split("");

  if (arr1.length !== arr2.length) {
    return false;
  }

  let arr1lib = {};
  arr1.forEach((element) => {
    arr1lib[element] = (arr1lib[element] || 0) + 1;
  });

  let arr2lib = {};
  arr2.forEach((element) => {
    arr2lib[element] = (arr2lib[element] || 0) + 1;
  });

  /**
   * for Of is for arrays
   * for In is for objects
   * must set var in the loop else you are declaring a global
   */
  for (var num in arr1lib) {
    if (!arr2lib[num] || arr2lib[num] !== arr1lib[num]) {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(1822, 2821));

// PASS
