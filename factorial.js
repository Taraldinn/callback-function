// var factorial =1
// for (let i = 1; i <= 5;i++){
// factorial= factorial*i;
// }
// console.log(factorial)

// var i = 1;
// var factorial = 1;
// while (i <= 10) {
//     factorial = factorial * i;
//     i++
//     // console.log(i, factorial);
//     // i++
// }
// console.log(factorial)


function factorial(n) {
    
    var factorial = 1;
   for (let i = 1; i <= n; i++){
       factorial= factorial * i;      
   }
    return factorial;
}

var result =factorial(5);
console.log(result);