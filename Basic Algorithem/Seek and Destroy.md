## Seek and Destroy 
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

### Test 
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].

### Solution
```js
function destroyer(arr, ...arg) {  
  return  arr.filter(e => !arg.includes(e));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```