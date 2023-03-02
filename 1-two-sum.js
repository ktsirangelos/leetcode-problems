/**
 * Returns the indices of two numbers which add up to a target number
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum = function (nums, target) {
  for (let a = 0; a <= nums.length; a++) {
    for (let b = a + 1; b <= nums.length; b++) {
      if (nums[a] + nums[b] === target) {
        return [a, b];
      }
    }
  }
};
