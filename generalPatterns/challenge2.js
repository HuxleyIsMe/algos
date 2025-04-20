const areThereDuplicates = (...args) => {
  const numbersLib = {};

  /**
   * Remember every calls for every thing some will only continues until
   * it finds a truthy val.
   */
  const hasDupicates = args.some((element) => {
    if (numbersLib[element]) {
      return true;
    }

    // first time round, you set it to zero that then broke because reading element numbers[ele] = 0
    // 0 is falsy causing the if statment to break. Be real careful with zero hux
    numbersLib[element] = 1;
  });

  return hasDupicates;
};

console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 7));
