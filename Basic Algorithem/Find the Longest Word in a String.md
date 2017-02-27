## Find the Longest Word in a String 
Return the length of the longest word in the provided sentence.

Your response should be a number.

### Test 
`findLongestWord("The quick brown fox jumped over the lazy dog")` should return a number.
`findLongestWord("The quick brown fox jumped over the lazy dog")` should return 6.
`findLongestWord("May the force be with you")` should return 5.

### Solution
```js
function findLongestWord(str) {
  let arr = str.split(' ');
  let longest = arr.reduce((prev, cur) => prev.length > cur.length ? prev : cur);
  return longest.length;
}

findLongestWord("Thea quick brown fox jumped over the lazy dog");
```