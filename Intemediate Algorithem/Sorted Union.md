Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

`uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` should return [1, 3, 2, 5, 4].
`uniteUnique([1, 3, 2], [1, [5]], [2, [4]])` should return [1, 3, 2, [5], [4]].
`uniteUnique([1, 2, 3], [5, 2, 1])` should return [1, 2, 3, 5].
`uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` should return [1, 2, 3, 5, 4, 6, 7, 8].


```js
function uniteUnique(...arr) {
  var arrFlat = arr.reduce((a, b) => a.concat(b), []);
  return [...new Set(arrFlat)];
  
  // Solution 2: 
  // return arr.reduce((a, b) => a.concat(b), [])
  //           .filter((e, i, a) => a.indexOf(e) === i);
  
  // Solution 3:
  // let arrFlat = [];
  // arr.forEach(e => arrFlat.push(...e));
  // return [...new Set(arrFlat)];
  
  // Solution 4:
  // let unique = arrFlat.reduce((a, b) => {
  //     if (a.indexOf(b) < 0) {
  //       a.push(b);
  //     }
  //     return a;
  //   }, []);
  // return unique;
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```