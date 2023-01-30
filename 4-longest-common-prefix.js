"use strict";

const longestCommonPrefix = function (strs) {
  if (strs.length == 1) {
    if (strs.includes("")) {
      return "";
    } else {
      return strs[0];
    }
  } else {
    let counter = 0;
    let counterNew = 0;
    let slicePosition = 1;
    let currentPrefix = strs[0].slice(0, slicePosition);
    let commonPrefix = "";
    while (counter == counterNew && commonPrefix.length < strs[0].length) {
      for (let j = 0; j < strs.length; j++) {
        if (currentPrefix == strs[j].slice(0, slicePosition)) {
          counter++;
        }
      }
      if (counter == strs.length * slicePosition) {
        commonPrefix = strs[0].slice(0, slicePosition++);
        currentPrefix = strs[0].slice(0, slicePosition);
        counterNew = counter;
      }
    }
    if (counterNew > 0) {
      return commonPrefix;
    } else {
      return "";
    }
  }
};
