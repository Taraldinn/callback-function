
// var sum =0;
// for (var i = 0; i < numbers.length; i++){
//     var element =numbers[i];
//     sum=sum+element;
// }

// console.log("total of numbers:",sum)

function getArraySum(numbers) {
    var sum=0
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum=sum+element
        
    }
    return sum
}
var numbers=[40,50,60,32,35,26,24,25,25,78,46,63,85];
var result=getArraySum(numbers);
console.log("total of the numbers ",result);
