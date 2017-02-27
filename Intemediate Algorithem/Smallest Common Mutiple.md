Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

`smallestCommons([1, 5])` should return a number.
`smallestCommons([1, 5])` should return 60.
`smallestCommons([5, 1])` should return 60.
`smallestCommons([1, 13])` should return 360360.
`smallestCommons([23, 18])` should return 6056820.

```js
function smallestCommons(arr) {

  let max = Math.max.apply(Math, arr);
  let min = Math.min.apply(Math, arr);
  let newArr = [];
  
  for(let i = max; i >= min; i--) {
    newArr.push(i);
  }
    
  function gcd(x, y) {
    while(y) {
      [x, y] = [y, x % y];
    }
    return x;
  }
  
  function lcm(a, b) {
    return a * b / gcd(a, b);
  }
     
  return newArr.reduce(lcm);
      
}


smallestCommons([1,5]);
```