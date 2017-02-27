### Chunky Monkey 
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

### Test 
`chunkArrayInGroups(["a", "b", "c", "d"], 2)` should return `[["a", "b"], ["c", "d"]]`.
`chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)` should return `[[0, 1, 2], [3, 4, 5]]`.
`chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)` should return `[[0, 1], [2, 3], [4, 5]]`.
`chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)` should return `[[0, 1, 2, 3], [4, 5]]`.
`chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)` should return `[[0, 1, 2], [3, 4, 5], [6]]`

### Solution
```js
function chunkArrayInGroups(arr, size) {
  let array = [];
  for (let i = 0; i < arr.length; i += size) {
    array.push(arr.slice(i, i + size));
  }
  return array;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```