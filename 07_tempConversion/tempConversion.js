const convertToCelsius = function(tempF) { 
  if (isNaN(tempF)) {return "ERROR"}
  let sumC = (tempF - 32) * 5 / 9
  sumC = round(sumC);
  return sumC;
};

const convertToFahrenheit = function(tempC) {
  if (isNaN(tempC)) {return "ERROR"}
  let sumF = (tempC * 9 / 5) + 32
  sumF = round(sumF);
  return sumF;
};

function round(number) {
    let dpNum = Math.round(number * 10) / 10 
    let fixed = dpNum.toFixed(1);
    fixed = parseFloat(number.toFixed(1))
    return fixed;
}

console.log(convertToCelsius(1));
console.log(convertToFahrenheit(0))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

//solution
//it was really simple
