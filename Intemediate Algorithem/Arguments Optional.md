Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

`addTogether(2, 3)` should return 5.
`addTogether(2)(3)` should return 5.
`addTogether("http://bit.ly/IqT6zt")` should return undefined.
`addTogether(2, "3")` should return undefined.
`addTogether(2)([3])` should return undefined.

```js
function addTogether(a, b) {
 
  if (arguments.length <= 1) {
    if(Number.isInteger(a)) {
      return function(c) {
        if (Number.isInteger(c)) {
          return a + c;
        }
      };
    } 
  } else if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b;
} 
}

addTogether(2)([3]);
```