const convert = function(string) {
    let result2 = string.split('').reverse();
    return result2
};

let bigWord = '';

const reverseString = function(string) {
    let backWord = convert(string);
    bigWord = '';
    console.log(backWord);
    for (letter of backWord) {
    bigWord += `${letter.toString()}`;
   }
   return bigWord;
}



console.log(reverseString(''));

//YOU COULDVE PUT THISreturn string.split("").reverse().join("");
//};
//PUT "" in the join to remove commas


// Do not edit below this line
module.exports = reverseString;
