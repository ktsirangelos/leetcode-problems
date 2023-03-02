/**
 * @param {number[]} arrayOfIntegers
 * @param {number} targetNumber
 * @returns {number[]}
 */
const twoSum = function (arrayOfIntegers, targetNumber) {
  for (let a = 0; a <= arrayOfIntegers.length; a++) {
    for (let b = a + 1; b <= arrayOfIntegers.length; b++) {
      if (arrayOfIntegers[a] + arrayOfIntegers[b] === targetNumber) {
        return [a, b];
      }
    }
  }
};
