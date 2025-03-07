const palindromes = function (string) {
    let arr = Array.from(string.toLowerCase());
    console.log(arr);
    arr1 = arr.filter((item) => {
        return item.toString().charCodeAt() >=65
        && item.toString().charCodeAt() <= 122||!isNaN(item) && item.toString() !== " "})
    console.log(arr1);
    let arr2 = arr1.slice(0).reverse();
    console.log(arr2);
    for (i = 0; i < arr2.length; i++) {
        if(arr1[i] === arr2[i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};
 

console.log(palindromes("A car, a man, a maraca."));


// let array = [1,2,9,4,5,6];
// console.log(array[2].toString().charCodeAt());

//solution
//They made a variable that contains only letters and numbers
//and used includes()








// Do not edit below this line
module.exports = palindromes;
