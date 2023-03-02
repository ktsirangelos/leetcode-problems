/**
 * @param {number} integer
 * @returns {boolean}
 */
const isPalindrome = function (integer) {
  const arrayOfDigits = Array.from(String(integer), Number);
  const middle = Math.floor(arrayOfDigits.length / 2);
  const left = arrayOfDigits.slice(0, middle);
  const right =
    arrayOfDigits.length % 2 == 0
      ? arrayOfDigits.slice(middle)
      : arrayOfDigits.slice(middle + 1);
  const rightReverse = [].concat(right).reverse();

  return left.toString() == rightReverse.toString() ? true : false;
};
