const sumAll = function(p1,p2) {
    let sum = isValid(p1,p2)
    if (sum === 0) {
        if (p1 < p2) {
            for (i=p1; i <= p2; i++) {
                sum = sum + i;
            }
            return sum;
        } else if (p1 > p2) {
            for (i=p2; i <= p1; i++) {
                sum = sum + i;
            }
        }
    } 
    return sum;
};

function isValid(p1,p2) {
    if (typeof p1 === "number" 
        && typeof p2 === "number" 
        && p1 >= 0 
        && p2 >= 0 
        && p1%1 === 0
        && p2%1 === 0) {
        return sum = 0;
    } else {
        return sum = "ERROR"
    } 
    
};

console.log(sumAll(400,100000));

// Do not edit below this line
module.exports = sumAll;

//solution
//They split it into multiple if statements as you dont need the else really
//they swapped the max and min beforehand to make it cleaner
//use Number.isInteger() to check if it is integer