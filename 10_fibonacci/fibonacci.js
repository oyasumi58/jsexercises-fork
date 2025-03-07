
//fibonacci formula
function fibonacci(num) {
    let Fn_2 = 0;
    let Fn = 1;
    let Fn_1 = 1;
    if (num < 0) {
        return "OOPS"
    } else {
        if (+num === 0 ) {
            return Fn_2;
        } else if (num === 1) {
            return Fn_1
        } else {
            for (i = 1; i < num; i++) {
                Fn = Fn_1 + Fn_2 //2 3
                Fn_2 = Fn_1 //1 2
                Fn_1 = Fn //2 3
            }   
             return Fn_1;
        
        };
    }
}

console.log(fibonacci("0"));


console.log(+"0");

//solution
// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
// const fib = [0, 1];
// for (let i = 2; i <= count; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count];






// Do not edit below this line
module.exports = fibonacci;



