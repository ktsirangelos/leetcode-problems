"use strict";

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
*/

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
