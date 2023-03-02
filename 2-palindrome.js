/* Palindrome
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

const isPalindrome = function (x) {
  const arrayOfDigits = Array.from(String(x), Number);
  const middle = Math.floor(arrayOfDigits.length / 2);
  const left = arrayOfDigits.slice(0, middle);
  const right =
    arrayOfDigits.length % 2 == 0
      ? arrayOfDigits.slice(middle)
      : arrayOfDigits.slice(middle + 1);
  const rightRev = [].concat(right).reverse();
  return left.toString() == rightRev.toString() ? true : false;
};
