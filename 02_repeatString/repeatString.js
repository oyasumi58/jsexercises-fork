let result1 = '';
const repeatString = function (string,numRepeat) {
    result1 = '';
    if (numRepeat <0) {
        return "ERROR"
    } else {
        for (i = 0; i < numRepeat; i++) {
         result1 += string
        }
        return result1
    }
};

// couldve done result1 += string i think
//if you didnt test with console.log i think you could've declared inside the loop

console.log(repeatString('hey',3));


// Do not edit below this line
module.exports = repeatString;
