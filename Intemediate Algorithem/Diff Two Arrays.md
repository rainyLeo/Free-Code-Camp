Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

`["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` should return [].
`[1, 2, 3, 5], [1, 2, 3, 4, 5]` should return [4].
`[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` should return ["piglet", 4].

```js
function diffArray(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  
  return newArr.filter(e => !arr1.includes(e) || !arr2.includes(e));  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```