function romanToInt(s) {
  let int = 0;
  let string = s;

  const transform = function (a, b) {
    if (string.includes(a)) {
      int += b;
      string = string.replace(a, "");
    }
  };

  // 1000

  transform("MMM", 3000);
  transform("MM", 2000);
  transform("CM", 900); // changed order
  transform("M", 1000);

  // 100

  transform("DCCC", 800);
  transform("DCC", 700);
  transform("DC", 600);
  transform("CD", 400); // changed order
  transform("D", 500);
  transform("CCC", 300);
  transform("CC", 200);
  transform("XC", 90);
  transform("C", 100);

  // 10

  transform("LXXX", 80);
  transform("LXX", 70);
  transform("LX", 60);
  transform("XL", 40); // changed order
  transform("L", 50);
  transform("XXX", 30);
  transform("XX", 20);
  transform("IX", 9); // changed order
  transform("X", 10);

  // 1

  transform("VIII", 8);
  transform("VII", 7);
  transform("VI", 6);
  transform("IV", 4);
  transform("V", 5);
  transform("III", 3);
  transform("II", 2);
  transform("I", 1);

  return int;
}
