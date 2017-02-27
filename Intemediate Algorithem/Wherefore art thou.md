Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

`whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })` should return [{ first: "Tybalt", last: "Capulet" }].
`whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })` should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
`whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })` should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
`whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })` should return [{ "a": 1, "b": 2, "c": 2 }].

```js
function whatIsInAName(collection, source) {
  
  return collection.filter(e => { 
    return Object.keys(source).every(v => {
      return e.hasOwnProperty(v) && (e[v] === source[v]);   
    });
  });  
  
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```