Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` should return [{name: "sputnik", orbitalPeriod: 86400}].
`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].


```js
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  arr.forEach(function(e) {
     var a = e.avgAlt + earthRadius;
     e.orbitalPeriod = Math.round(2 * Math.PI * Math.pow(a*a*a / GM, 1/2));
     delete e.avgAlt;
  });
  
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```