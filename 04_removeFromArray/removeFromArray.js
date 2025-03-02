


const removeFromArray = function(array, ...removeArgs) {
    let newArray = Array.from(array);
    for (argEv of array) {
        console.log(argEv);
        for (arg of removeArgs) {
            console.log(arg);
            let index = newArray.indexOf(argEv);
            if (arg === argEv) {
                newArray = newArray.toSpliced(index,1,"Kiwi");
            } else {
                continue;
            }
            }
    }
    newArray = newArray.filter(word => word !== "Kiwi");
    return newArray;

};


console.log(removeFromArray([1,2,2,3],1,2,"3"));

// Do not edit below this line
module.exports = removeFromArray;
 

//solution
//make new array => push all items from array into it unless it includes theArgs

// const removeFromArray(array, ...theArgs) {
//     const newArray = [];
//     array.forEach((item ) => {
//         if (!theArgs.includes(item)) {
//             array.push(item);
//         }
//     })
//     return newArray;
// }