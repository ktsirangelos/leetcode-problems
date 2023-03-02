const longestCommonPrefix = function (strs) {
  if (strs.length == 1) {
    return strs.includes("") ? "" : strs[0];
  } else {
    let counter = 0;
    let storeCounter = 0;
    let slicePosition = 1;
    let currentPrefix = strs[0].slice(0, slicePosition);
    let commonPrefix = "";
    while (counter == storeCounter && commonPrefix.length < strs[0].length) {
      for (let j = 0; j < strs.length; j++) {
        if (currentPrefix == strs[j].slice(0, slicePosition)) {
          counter++;
        }
      }
      if (counter == strs.length * slicePosition) {
        commonPrefix = strs[0].slice(0, slicePosition++);
        currentPrefix = strs[0].slice(0, slicePosition);
        storeCounter = counter;
      }
    }
    return storeCounter > 0 ? commonPrefix : "";
  }
};
