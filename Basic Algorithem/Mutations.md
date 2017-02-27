## Mutations 
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

### Test 
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.

```js
function mutation(arr) {  
  let arr1 = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase();

  for (let i = 0; i < arr2.length; i++) { 
    if (!(arr1.includes(arr2[i]))) {
      return false;
    }
  }
  return true;
  // Solution 2:
  // var str1 = arr[0].toLowerCase();
  // var str2Arr = arr[1].toLowerCase().split('');
  // return str2Arr.every(e => str1.includes(e));
}

mutation(["hello", "hey"]);
```