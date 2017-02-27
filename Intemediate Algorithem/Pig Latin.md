Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.


`translatePigLatin("california")` should return "aliforniacay".
`translatePigLatin("paragraphs")` should return "aragraphspay".
`translatePigLatin("glove")` should return "oveglay".
`translatePigLatin("algorithm")` should return "algorithmway".
`translatePigLatin("eight")` should return "eightway".

```js
function translatePigLatin(str) {
  let index = str.search(/[aeiou]/);
  
  if (index === 0) {
    return str + 'way';
  } else {
    return str.slice(index) + str.slice(0, index) + 'ay';
  }
}

translatePigLatin("consonant");
```