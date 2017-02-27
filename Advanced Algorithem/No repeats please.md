Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

`permAlone("aab")` should return a number.
`permAlone("aab")` should return 2.
`permAlone("aaa")` should return 0.
`permAlone("aabb")` should return 8.
`permAlone("abcdefa")` should return 3600.
`permAlone("abfdefa")` should return 2640.
`permAlone("zzzzzzzz")` should return 0.
`permAlone("a")` should return 1.
`permAlone("aaab")` should return 0.
`permAlone("aaabb")` should return 12.


```js
function permAlone(str) {
  
  let permArr = [];
  let arr = str.split('');
  
  function perm(n) {
    if (n === 1) {
      permArr.push(arr.join(''));
    } else {
        for (let i = 0; i < n; i++) {
          perm(n-1);
          
          if ( n % 2 === 0) {
            [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
          } else {
            [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
          }    
       }
    }
  }
  
  perm(str.length);
  
  let pattern = /([a-z])\1+/;
  let count = 0;
  permArr.forEach(function(e){
    if (pattern.test(e)) {
      count += 1;
    }
  });
  
  return permArr.length - count;
}

permAlone('aab');