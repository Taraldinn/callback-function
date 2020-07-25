function feetToMile(input) {
    if (input < 0) {
        return 'give me a positive number'


    } else {
        const result = input * 0.000189394
        return result


    }
}
var result2 = feetToMile(5280)

console.log(result2.toFixed(4))

//  cubic feet
//  akta  chair ee lage 1 cubic
// akta table  a lage 3 cubic
// akta khate 5 cubic 

// const woodchair =1
// const woodtable=3
// const woodbed =5

// var chair = 1*woodchair
// var table = 3*woodtable
// var bed = 5*woodbed

// console.log(chair+table+bed)
function quantity(chair, table, bed) {
    const woodchair = 1 * chair
    const woodtable = 3 * table
    const woodbed = 5 * bed
    return woodchair + woodtable + woodbed

}
let result = quantity(10, 25, 15)
console.log(result)

// per feet uccotar jonno 1000 hajar brick lagbe
// function briciksCaculator(floorOfBuilding) {
//     if (floorOfBuilding <=10) {
//         const calculation= 15*1000*floorOfBuilding
//         return calculation
//     } 
//     else if{
//         var building=floorOfBuilding-10
//         const calculation2=  15*1000*10+12*1000*building
//         return calculation2
//     }

// }
//     else{

//     }
// }
// let result4=briciksCaculator(50)
//     console.log(result4)

// function bricksCAlculation(floor) {

//     if (floor > 20) {
//                 var building1 = floor - 20 * (1000 * 10)
//                 var build = floor - 10 * (12 * 1000)
//                 var total = build + (10 * 15 * 1000)
//                 const calculate = building1 + total
//                 return calculate
//     } else if (floor <= 20) {
//                 var build = floor - 10 * (12 * 1000)
//                 const total = build + (10 * 15 * 1000)
//                 return total
//     } else if (floor <= 10) {
//                 const floor2 = floor * 15 * 1000
//                 return floor2
//     } else {
//                 return 'put a positive number'
//     }

// }
//                 let result3 = bricksCAlculation(50)
//                 let result4 = bricksCAlculation(32)
//                 let result5 = bricksCAlculation(18)
//                 let result6 = bricksCAlculation(7)
//                 console.log(result3)
//                 console.log(result4)
//                 console.log(result5)
//                 console.log(result6)







// function brikCal2(floorCount) {
//     let floorCounting = floorCount - 10
//     let floorCounting2 = floorCounting - 10

//     let building1result = 15*1000*10 + 12*1000*10 + 10*1000* floorCounting2
//     let building1result2 = 15*1000*10 + 12*1000*floorCounting
//     let building1result3 = 15*1000*floorCount

//     if(floorCount>20){
//         if (floorCounting2=>1) {          
//              console.log(building1result)
//         }
//     }else if(floorCount>10){       
//              console.log(building1result2)
//     }else if(0>floorCount<=10){       
//              console.log(building1result3)
//     }

// }
// brikCal2(21)


/* Calculate Brick*/
// function brickCalculator(numOfFloor) {
// 	let oneToTenth = 10 * 15;
// 	let tenToTwentieth = 10 * 12;
// 	let restOfFloors = 0;

// 	let totalFeet = 0;
// 	let totalBrick = 0;

// 	if (numOfFloor > 20) {
// 		restOfFloors = (numOfFloor - 20) * 10;
// 		totalFeet = oneToTenth + tenToTwentieth + restOfFloors;
// 	} else {
// 		if (numOfFloor > 10) {
// 			restOfFloors = (numOfFloor - 10) * 12;
// 			totalFeet = oneToTenth + restOfFloors;
// 		} else {
// 			totalFeet = numOfFloor * 15;
// 		}
// 	}

// 	totalBrick = totalFeet * 1000;
// 	return `Brick needed = ${totalBrick}`;
// }
//  console.log(brickCalculator(6));
//  console.log(brickCalculator(11));
//  console.log(brickCalculator(26));


function brickcalculator(numberOfFloor) {
    var upperfloor =  (numberOfFloor - 20)*10*1000+(10*12*1000)+(10*15*1000)
    var middlefloor = (numberOfFloor - 10)* 12*1000
    var lastfloor = numberOfFloor*15*1000 
    if (numberOfFloor > 20) {
        const result1=upperfloor
        return result1
    } 
    else if (numberOfFloor <=20) {
        const result2=lastfloor+middlefloor
        return result2
    }
    
    
    else {
        const result3=numberOfFloor*15*1000
        return result3
    }

}
let output=brickcalculator(2)
console.log(output)




var array =['jamalk','kamal','rahim','karim','amolgir']