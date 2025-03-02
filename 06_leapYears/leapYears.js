const leapYears = function(year) {
    if (!Number.isInteger(year)) {return "ERROR"}
    if (year < 0) {return "ERROR"}

   if (year%4 !== 0) {
    return false;
   } else if (year%100 === 0 && year%400 !== 0) {
    return false;
   } else {
    return true;
   }
};

console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;

//solution
//for better readability and cleanliness, store them
//all in variables that are descriptive
// const leapYears = function (year) {
//   const isYearDivisibleByFour = year % 4 === 0;
//   const isCentury = year % 100 === 0;
//   const isYearDivisibleByFourHundred = year % 400 === 0;

//   if (
//     isYearDivisibleByFour &&
//     (!isCentury || isYearDivisibleByFourHundred)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };