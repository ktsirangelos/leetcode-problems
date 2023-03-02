/**
 * Finds the longest common prefix amonst an array of strings
 * @param {string[]} stringsArray
 * @returns {[] | string}
 */
const longestCommonPrefix = function (stringsArray) {
  if (stringsArray.length == 1) {
    return stringsArray.includes("") ? "" : stringsArray[0];
  } else {
    let counter = 0;
    let storeCounter = 0;
    let slicePosition = 1;
    let currentPrefix = stringsArray[0].slice(0, slicePosition);
    let commonPrefix = "";

    while (
      counter == storeCounter &&
      commonPrefix.length < stringsArray[0].length
    ) {
      for (let j = 0; j < stringsArray.length; j++) {
        if (currentPrefix == stringsArray[j].slice(0, slicePosition)) {
          counter++;
        }
      }
      if (counter == stringsArray.length * slicePosition) {
        commonPrefix = stringsArray[0].slice(0, slicePosition++);
        currentPrefix = stringsArray[0].slice(0, slicePosition);
        storeCounter = counter;
      }
    }

    return storeCounter > 0 ? commonPrefix : "";
  }
};
