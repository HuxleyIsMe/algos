// check chars in str1 appear in str2 without there order changing
// multi pointer....

const isSubsequence = (str1, str2) => {
  if (str1.length > str2.length) {
    return false;
  }
  const asArr1 = [...str1];
  const asArr2 = [...str2];

  let head = 0;

  for (var i = 0; i < asArr2.length && head < asArr1.length - 1; i++) {
    if (asArr2[i] === asArr1[head]) {
      head++;
    }

  return !!head;
};

console.log(isSubsequence("hey", "he"));
console.log(isSubsequence("hey", "hey"));
console.log(isSubsequence("hey", "heya"));
console.log(isSubsequence("hey", "heaheheyakaka"));
