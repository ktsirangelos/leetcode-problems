// IN PROGRESS

const isValid = function (string) {
  if (!string.length > 0) return;

  const arrayOfCharacters = Array.from(string);

  console.log(arrayOfCharacters);

  const getEntries = function (array) {
    let indParLeft = [];
    let indParRight = [];

    let indBraLeft = [];
    let indBraRight = [];

    let indCurlLeft = [];
    let indCurlRight = [];

    for (const [index, element] of array.entries()) {
      if (element === "(") indParLeft.push(index);
      if (element === ")") indParRight.push(index);

      if (element === "[") indBraLeft.push(index);
      if (element === "]") indBraRight.push(index);

      if (element === "{") indCurlLeft.push(index);
      if (element === "}") indCurlRight.push(index);
      console.log(index, element);
    }

    console.log(indParLeft);
    console.log(indParRight);

    console.log(indBraLeft);
    console.log(indBraRight);

    console.log(indCurlLeft);
    console.log(indCurlRight);

    if (
      indParLeft.length !== indParRight.length ||
      indBraLeft.length !== indBraRight.length ||
      indCurlLeft.length !== indCurlRight.length
    )
      // return false;
      console.log("false");
    else {
      for (let index = 0; index < indParLeft.length; index++) {
        if (
          ((indParRight[index] - indParLeft[index] - 1) % 2 == 0 ||
            indParRight[index] - indParLeft[index] - 1 >= 0) &&
          ((indBraRight[index] - indBraLeft[index] - 1) % 2 == 0 ||
            indBraRight[index] - indBraLeft[index] - 1 >= 0) &&
          ((indCurlRight[index] - indCurlLeft[index] - 1) % 2 == 0 ||
            indCurlRight[index] - indCurlLeft[index] - 1 >= 0)
        )
          console.log("true");
        else {
          console.log("false");
        }
      }
    }
  };

  getEntries(arrayOfCharacters);
};

testString = "{}())([]";
isValid(testString);
