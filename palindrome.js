"use strict";

/*
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

const isPalindrome = function (x) {
  const arrayOfDigits = Array.from(String(x), Number);
  if (arrayOfDigits.length % 2 == 0) {
    const middle1 = Math.floor(arrayOfDigits.length / 2);
    const left1 = arrayOfDigits.slice(0, middle1);
    const right1 = arrayOfDigits.slice(middle1);
    const right1rev = [].concat(right1).reverse();
    if (left1.toString() == right1rev.toString()) {
      return true;
    } else {
      return false;
    }
  } else {
    const middle2 = Math.floor(arrayOfDigits.length / 2);
    const left2 = arrayOfDigits.slice(0, middle2);
    const right2 = arrayOfDigits.slice(middle2 + 1);
    const right2rev = [].concat(right2).reverse();
    if (left2.toString() == right2rev.toString()) {
      return true;
    } else {
      return false;
    }
  }
};
