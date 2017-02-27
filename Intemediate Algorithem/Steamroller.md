Flatten a nested array. You must account for varying levels of nesting.

`steamrollArray([[["a"]], [["b"]]])` should return ["a", "b"].
`steamrollArray([1, [2], [3, [[4]]]])` should return [1, 2, 3, 4].
`steamrollArray([1, [], [3, [[4]]]])` should return [1, 3, 4].
`steamrollArray([1, {}, [3, [[4]]]])` should return [1, {}, 3, 4].
  
```js
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function (a, b) {
    return a.concat(Array.isArray(b) ? steamrollArray(b) : b);
  }, []);

  // Solution 2:
  // arr = arr.reduce((a, b) => a.concat(b), []);
  // for (let i = 0; i < arr.length; i++) {
  //   while (Array.isArray(arr[i])) {
  //     arr[i] = arr[i][0]; 
  //   }
  // }
  // 
  // return arr;
}

steamrollArray([1, [2], [3, [[[4]]]]]);
```