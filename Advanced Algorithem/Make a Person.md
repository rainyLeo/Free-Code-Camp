Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

`Object.keys(bob).length` should return 6.
`bob instanceof Person` should return true.
`bob.firstName` should return undefined.
`bob.lastName` should return undefined.
`bob.getFirstName()` should return "Bob".
`bob.getLastName()` should return "Ross".
`bob.getFullName()` should return "Bob Ross".
`bob.getFullName()` should return "Haskell Ross" after bob.setFirstName("Haskell").
`bob.getFullName()` should return "Haskell Curry" after bob.setLastName("Curry").
`bob.getFullName()` should return "Haskell Curry" after bob.setFullName("Haskell Curry").
`bob.getFirstName()` should return "Haskell" after bob.setFullName("Haskell Curry").
`bob.getLastName()` should return "Curry" after bob.setFullName("Haskell Curry").
```js
var Person = function (firstAndLast) {
  
  var firstName = firstAndLast.split(' ')[0];
  var lastName = firstAndLast.split(' ')[1];
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() { 
    return fullName; 
  };

  this.setFirstName = function(newName) {
    firstName = newName;
    fullName = newName + ' ' + lastName;
  };

  this.setLastName = function(newName) {
    lastName = newName;
    fullName = firstName + ' ' + newName;
  };

  this.setFullName = function(newName) {
    firstName = newName.split(' ')[0];
    lastName = newName.split(' ')[1];
    fullName = newName; 
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
```