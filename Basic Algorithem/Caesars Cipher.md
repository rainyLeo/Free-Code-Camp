### Caesars Cipher 
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

### Test
`rot13("SERR PBQR PNZC")` should decode to `"FREE CODE CAMP"`
`rot13("SERR CVMMN!")` should decode to `"FREE PIZZA!"`
`rot13("SERR YBIR?")` should decode to `"FREE LOVE?"`  

### Solution
```js
function rot13(str) {  
  function decode(chr) {
    var code = chr.charCodeAt(0);
    return code < 78 ? String.fromCharCode(code + 13) : String.fromCharCode(code - 13);
  }

 return str.replace(/[A-Z]/g, decode);

 // Solution 2:
 // let arr = str.split('');
 //  
 // arr.forEach(function(e, i, a) {
 //   let code = e.charCodeAt(0);
 //   
 //   if (65 <= code && code <= 90) {
 //     a[i] = code >= 78 ? code - 13 : code + 13;   
 //     a[i] = String.fromCharCode(a[i]);
 //   }   
 // });
 //  
 // return arr.join(''); 
}

rot13("SERR CVMMN!");
```