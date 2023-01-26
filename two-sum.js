"use strict";

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 
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
