
## Repeat a string repeat a string 
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

### Test 
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".

### Solution
```js
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return '';
  }
  return str.repeat(num);
  // Solution 2:
  // var res = '';
  // while (num-- > 0) {
  //   res += str;
  // }
  // return res;
}

repeatStringNumTimes("abc", 3);
```