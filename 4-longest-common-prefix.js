/**
 * @param {string[]} arrayOfStrings
 * @returns {string}
 */
const longestCommonPrefix = function (arrayOfStrings) {
  if (arrayOfStrings.length == 1) {
    return arrayOfStrings.includes("") ? "" : arrayOfStrings[0];
  } else {
    let counter = 0;
    let storeCounter = 0;
    let slicePosition = 1;
    let currentPrefix = arrayOfStrings[0].slice(0, slicePosition);
    let commonPrefix = "";

    while (
      counter == storeCounter &&
      commonPrefix.length < arrayOfStrings[0].length
    ) {
      for (let j = 0; j < arrayOfStrings.length; j++) {
        if (currentPrefix == arrayOfStrings[j].slice(0, slicePosition)) {
          counter++;
        }
      }
      if (counter == arrayOfStrings.length * slicePosition) {
        commonPrefix = arrayOfStrings[0].slice(0, slicePosition++);
        currentPrefix = arrayOfStrings[0].slice(0, slicePosition);
        storeCounter = counter;
      }
    }

    return storeCounter > 0 ? commonPrefix : "";
  }
};
