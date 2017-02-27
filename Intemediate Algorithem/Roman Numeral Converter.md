Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

`convertToRoman(44)` should return "XLIV".
`convertToRoman(45)` should return "XLV"
`convertToRoman(68)` should return "LXVIII"
`convertToRoman(83)` should return "LXXXIII"
`convertToRoman(97)` should return "XCVII"
`convertToRoman(99)` should return "XCIX"
`convertToRoman(500)` should return "D"
`convertToRoman(501)` should return "DI"
`convertToRoman(1006)` should return "MVI"
`convertToRoman(1023)` should return "MXXIII"
`convertToRoman(2014)` should return "MMXIV"

```js
function convertToRoman(num) {
  let str = num + "";
  let roman = "IVXLCDM";
  let length = str.length;
  let rom = "";
  
  for (let i = 0; i < length; i++) {
    let j = 2 * (length - i) -1;

    switch(str[i]) {
      case "1":
      case "2":
      case "3":
      case "6":
      case "7":
      case "8":
        rom += str[i] > 5 ? roman[j] + roman[j-1].repeat(str[i] - 5) : roman[j-1].repeat(str[i]);
        break;
      case "4":
      case "9":
        rom += str[i] > 5 ? roman[j-1] + roman[j+1] : roman[j-1] + roman[j];
        break;
      case "5":
        rom += roman[j];
        break;            
    }

  }
 
  return rom;
  
}

convertToRoman(36);
```
