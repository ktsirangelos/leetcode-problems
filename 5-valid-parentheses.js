// IN PROGRESS

const isValid = function (s) {
  const arr = Array.from(s);
  const leftPar = arr.filter((char) => char == "(");
  const rightPar = arr.filter((char) => char == ")");
  const leftBra = arr.filter((char) => char == "[");
  const rightBra = arr.filter((char) => char == "]");
  const leftCurl = arr.filter((char) => char == "{");
  const rightCurl = arr.filter((char) => char == "}");
  return leftPar.length() == rightPar.length() &&
    leftBra.length() == rightBra.length() &&
    leftCurl.length() == rightCurl.length()
    ? true
    : false;
};
