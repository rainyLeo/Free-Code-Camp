### Confirm the Ending 
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

### Test 
`confirmEnding("Bastian", "n")` should return `true`.
`confirmEnding("Connor", "n")` should return `false`.
`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` should return `false`.
`confirmEnding("He has to give me a new name", "name")` should return `true`.
`confirmEnding("Open sesame", "same")` should return `true`.
`confirmEnding("Open sesame", "pen")` should return `false`.

### Solution
```js
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
  
  // solution2: return str.substring(str.length - target.length) === target;

}

confirmEnding("Bastian", "n");
``