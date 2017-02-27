Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].


`makeFriendlyDates(["2016-07-01", "2016-07-04"])` should return ["July 1st","4th"].
`makeFriendlyDates(["2016-12-01", "2017-02-03"])` should return ["December 1st","February 3rd"].
`makeFriendlyDates(["2016-12-01", "2018-02-03"])` should return ["December 1st, 2016","February 3rd, 2018"].
`makeFriendlyDates(["2017-03-01", "2017-05-05"])` should return ["March 1st, 2017","May 5th"]
`makeFriendlyDates(["2018-01-13", "2018-01-13"])` should return ["January 13th, 2018"].
`makeFriendlyDates(["2022-09-05", "2023-09-04"])` should return ["September 5th, 2022","September 4th"].
`makeFriendlyDates(["2022-09-05", "2023-09-05"])` should return ["September 5th, 2022","September 5th, 2023"].


```js
function makeFriendlyDates(arr) {
  let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let [arr1, arr2] = [arr[0].split("-"), arr[1].split("-")];
  let [year1, month1, day1] = [arr1[0], arr1[1], parseInt(arr1[2], 10)];
  let [year2, month2, day2] = [arr2[0], arr2[1], parseInt(arr2[2], 10)];  
  let [year1Str,year2Str] = [", " + year1, ", " + year2 ];
  let [month1Str, month2Str]  = [monthArr[month1-1] + " ", monthArr[month2-1] + " "];

  function getDay(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return day + "st";
      case 2:
      case 22:
        return day + "nd";
      case 3:
      case 23:
        return day + "rd";
      default:
        return day + "th";
    }
  }
  
  let day1Str = getDay(day1),
      day2Str = getDay(day2); 
  
  if (year1 == 2016 && year2 - year1 <= 1) {
    year1Str = "";
    year2Str = "";
  }
  
  if (year1 === year2  || (year2 - year1 === 1 && month1 - month2 > 0) || (year2 - year1 === 1 && month1 - month2 === 0 && day1 > day2)) {
    year2Str = "";
  } 

  if (year1 === year2 && month1 === month2) {
    month2Str = "";
  }
   
  let string1 =  month1Str  + day1Str + year1Str,
      string2 =  month2Str  + day2Str + year2Str,
      dates = [];
  
  dates[0] = string1;
  dates[1] = string2;
  
  if (year1 === year2 && month1 === month2 && day1 === day2) {
    dates.length = 1;
  }
  
  return dates;
}

makeFriendlyDates(["2016-07-01", "2016-07-04"]);
```
