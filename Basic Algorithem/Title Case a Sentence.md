## Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

### Test
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".

### Solution
```js
function titleCase(str) {
  return str.replace(/[\w']+/g, function(m) {
    return m[0].toUpperCase() + m.slice(1)
  })

  // Solution 2:
  // let strArray = str.split(' ');
  // strArray.forEach((e, i, a) => a[i] = e[0].toUpperCase() + e.slice(1).toLowerCase());
  //
  // return strArray.join(' ');
  //
  // return str.replace(/[\w']* ?/g, function(m) {
  //   return m[0].toUpperCase() + m.slice(1)
  // })
}

titleCase("I'm a little tea pot");
```
