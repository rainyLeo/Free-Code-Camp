The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

`pairElement("ATCGA")` should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
`pairElement("TTGAG")` should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
`pairElement("CTCTA")` should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

```js

function pairElement(str) {
  
  var result = [];
  var pairs ='ACGT';
 
  for (let i = 0, length = str.length; i < length; i++) {
    result.push([str[i], pairs[3 - pairs.indexOf(str[i])]]);
  }  
  return result;
  
  // Solution 2
  // let arr = str.split("");
  // let result = [];
  // 
  // for (let i = 0, length = arr.length; i < length; i++) {
  //   switch(arr[i]) {
  //     case "G":
  //       result.push(["G", "C"]);
  //       break;
  //     case "C":
  //       result.push(["C", "G"]);
  //       break;
  //     case "A":
  //       result.push(["A", "T"]);
  //       break;
  //     case "T":
  //       result.push(["T", "A"]);
  //       break;
  //   }
  // }
  // 
  // return result;
}

pairElement("GCG");
```