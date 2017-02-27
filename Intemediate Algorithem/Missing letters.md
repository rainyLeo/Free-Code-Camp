Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

`fearNotLetter("abce")` should return "d".
`fearNotLetter("abcdefghjklmno")` should return "i".
`fearNotLetter("bcd")` should return undefined.
`fearNotLetter("yz")` should return undefined.

```js
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) { 
     if (i + 1 < str.length && (str[i+1].charCodeAt() -str[i].charCodeAt() === 2)) {
       return String.fromCharCode(str[i].charCodeAt()+1);
     }
   }
}

fearNotLetter("abce");
```