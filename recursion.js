function  factorial(num) {
    var fact =1;
    for (var i = 1; i <= num; i++) {
        
        fact=fact*i;
   
    }
    return fact
}
var result =factorial(5);
console.log(result)

function  factorialRcursive(num) {
    if (num==0) {
        return 1;
    }
      else{
          return number*factorialRcursive
      }
}
