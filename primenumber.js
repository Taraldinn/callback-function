// var prime =2
// if (prime%2==0) {
//     console.log('this is prime number')
// } else {
//     console.log('this not prime number')
// }

// function prime(n) {
//     if (n % 2 == 0) {
//         return msg
//     } else {
//         return msg2
//     }
// }
// var msg='this is prime number'
// var msg2='this is not prime number'


// var result =prime(11)
// console.log(result)

// var n=19
// for ( i = 2; i < n-1 ; i++){
//     console.log(i,n%1);
//     if (i, n%2==0) {
//         console.log('this is prime number')
//     } else {
//         console.log('not a prime number')
//     }
   
   
// }

// function isPrime(num) {
//     for(var i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   }
//   var result = isPrime(18)
//   console.log(result)

function isPrime(n) {
  for ( i = 2; i < n; i++) {
    if (n%i == 0) {
      return 'Not a prime number';
      
    }
    
  }
  return'your number is prime '
}
var result=isPrime(3)
console.log(result)
