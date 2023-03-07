const romanToInt = function (string) {
  let string = string;
  let int = 0;

  const transform = function ([a, b]) {
    if (string.includes(a)) {
      int += b;
      string = string.replace(a, "");
    }
  };

  const relationships = [
    // Priority of transformations - do NOT change order
    ["MMM", 3000],
    ["MM", 2000],
    ["CM", 900], // Adjusted because "M" contained in "CM"
    ["M", 1000],

    ["DCCC", 800],
    ["DCC", 700],
    ["DC", 600],
    ["CD", 400], // Adjusted because "D" contained in "CD"
    ["D", 500],
    ["CCC", 300],
    ["CC", 200],
    ["XC", 90],
    ["C", 100],

    ["LXXX", 80],
    ["LXX", 70],
    ["LX", 60],
    ["XL", 40], // Adjusted because "L" contained in "XL"
    ["L", 50],
    ["XXX", 30],
    ["XX", 20],
    ["IX", 9], // Adjusted because "X" contained in "IX"
    ["X", 10],

    ["VIII", 8],
    ["VII", 7],
    ["VI", 6],
    ["IV", 4],
    ["V", 5],
    ["III", 3],
    ["II", 2],
    ["I", 1],
  ];

  relationships.forEach((pair) => transform(pair));

  return int;
};
