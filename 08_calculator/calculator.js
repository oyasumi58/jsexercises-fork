const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((sum,item) => 
    sum + item,0);
};

const multiply = function(arr) {
  return arr.reduce((product,current) => {
    return product * current
  } , 1);
};

const power = function(num,pow) { 
    let result = 1;
    for (let i = 0; i < pow; i++) {
      result = result * num
    }
    //or just use Math/pow()
	return result;
};

const factorial = function(num) {
	let result = 1;
  for(let i=1; i <= num; i++) {
    result = result * i;
    // or result *= i;
  }
   return result;
};

let arr1 = [1,2,3,4];
let arr2 = [2,3,4];

console.log(add(2,2));
console.log(subtract(-6,4));
console.log(sum(arr1));
console.log(multiply(arr2));
console.log(power(3,6));
console.log(factorial(4));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
