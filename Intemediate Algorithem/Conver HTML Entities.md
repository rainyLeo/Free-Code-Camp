Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

`convertHTML("Dolce & Gabbana")` should return Dolce &​amp; Gabbana.
`convertHTML("Hamburgers < Pizza < Tacos")` should return Hamburgers &​lt; Pizza &​lt; Tacos.
`convertHTML("Sixty > twelve")` should return Sixty &​gt; twelve.
`convertHTML('Stuff in "quotation marks"')` should return Stuff in &​quot;quotation marks&​quot;.
`convertHTML("Shindler's List")` should return Shindler&​apos;s List.
`convertHTML("<>")` should return &​lt;&​gt;.
`convertHTML("abc")` should return abc.

```js
function convertHTML(str) {
  let pattern = /[&<>"']/g;
  
  return str.replace(pattern, function(a) {
    switch(a) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&apos;";
    }
  });  
}

convertHTML("Dolce & Gabbana");
```