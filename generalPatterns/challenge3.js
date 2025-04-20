/**
 * Tells us wether we can create the message using the letters passed to us
 * @param {string} message
 * @param {string} letters
 * @returns {boolean}
 */
const constructNode = (message, letters) => {
  // if the message contains more letters then we have, we obviously cant make it
  if (message.length > letters.length) {
    return false;
  }

  // lets organize our letters first into a lib
  const lettersLib = {};

  [...letters].forEach((letter) => {
    lettersLib[letter] = (lettersLib[letter] || 0) + 1;
  });

  // now we have our letters lets check if we can make the word so
  let canMakeMessage = true;

  [...message].some((letter) => {
    if (lettersLib[letter]) {
      lettersLib[letter] -= 1;
    } else {
      // letter isnt present in the lib or we have ran out
      canMakeMessage = false;
      return true; // exits the some loop
    }
  });

  return canMakeMessage;
};

console.log(constructNode("aa", "abc"));
console.log(constructNode("abc", "dcba"));
