"use strict";

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
  transform("CM", 900);
  transform("M", 1000);

  // 100

  transform("DCCC", 800);
  transform("DCC", 700);
  transform("DC", 600);
  transform("CD", 400);
  transform("D", 500);
  transform("CCC", 300);
  transform("CC", 200);
  transform("XC", 90);
  transform("C", 100);

  // 10

  transform("LXXX", 80);
  transform("LXX", 70);
  transform("LX", 60);
  transform("XL", 40);
  transform("L", 50);
  transform("XXX", 30);
  transform("XX", 20);
  transform("IX", 9);
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

// Tests

console.log(romanToInt("MMMCMXCIX")); // 3999 --
console.log(romanToInt("MMMXCIX")); // 3099 ----
console.log(romanToInt("MMMCMIX")); // 3909 ----
console.log(romanToInt("MMMCMXC")); // 3990 ----
console.log(romanToInt("MMM")); // 3000 --------
console.log(romanToInt("MMMCM")); // 3900 ------
console.log(romanToInt("MMMXC")); // 3090 ------
console.log(romanToInt("MMMIX")); // 3009 ------
console.log(romanToInt("DLV")); // 555 ---------
console.log(romanToInt("DL")); // 550 ----------
console.log(romanToInt("D")); // 500 -----------
console.log(romanToInt("DV")); // 505 ----------
console.log(romanToInt("LV")); // 55 -----------
console.log(romanToInt("L")); // 50 ------------
console.log(romanToInt("V")); // 5 -------------
