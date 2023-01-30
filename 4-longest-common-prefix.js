"use strict";

console.log(`dfdf`);

const longestCommonPrefix = function (strs) {
  strs.forEach((string, i) => {
    console.log(string.slice(0, 1));
  });
};

longestCommonPrefix(["flower", "flow", "flight"]);
