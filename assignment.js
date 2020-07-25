// function convertFeetToMiles(feet) {
// 	if (feet < (0)) {
// 		return 'input cannot be less than zero'; 
// 	} else {
// 		var theory =feet*0.00018939;
// 	}
// }
// var result=convertFeetToMiles(10)
// console.log(result)
// const mile = 0.00018939;
// function feetToMeters(feet) {
// 	if (feet < 0) {
// 		return 'input cannot be less than zero';
// 	} else {
// 		return (feet*mile);
// 	}
// }
// var result=feetToMeters(10)
// console.log(result)
/* Convert Feet to Mile*/


function feetToMile(num) {
	if (num > 0) {
		const mile = (num * '0.00018939');
		return mile;
	} else {
		return " Please, give me a positive number or greater than 0";
	}
}
 console.log(feetToMile(0));
 console.log(feetToMile(30000));


/* Calculate Wood*/
function woodCalculator(numOfChair, numOfTable, numOfBed) {
	const chair = numOfChair * 1;
	const table = numOfTable * 3;
	const bed = numOfBed * 5;

	let totalWood = chair + table + bed;

	return ` Wood needed = ${totalWood} cubic feet`;
}
 console.log(woodCalculator(5, 2, 5));

/* Calculate Brick*/
function brickCalculator(numOfFloor) {
	let oneToTenth = 10 * 15;
	let tenToTwentieth = 10 * 12;
	let restOfFloors = 0;

	let totalFeet = 0;
	let totalBrick = 0;

	if (numOfFloor > 20) {
		restOfFloors = (numOfFloor - 20) * 10;
		totalFeet = oneToTenth + tenToTwentieth + restOfFloors;
	} else {
		if (numOfFloor > 10) {
			restOfFloors = (numOfFloor - 10) * 12;
			totalFeet = oneToTenth + restOfFloors;
		} else {
			totalFeet = numOfFloor * 15;
		}
	}

	totalBrick = totalFeet * 1000;
	return `Brick needed = ${totalBrick}`;
}
 console.log(brickCalculator(6));
 console.log(brickCalculator(11));
 console.log(brickCalculator(26));

/*Find who has the smallest name*/
function tinyFriend(friendsArray) {
	let smallestName = friendsArray[0];

	for (let i = 0; i < friendsArray.length; i++) {
		if (friendsArray[i].length <= 1) {
			smallestName = "";
			console.log(`The names are not valid `);
		} else if (smallestName.length > friendsArray[i].length) {
			smallestName = friendsArray[i];
		}
	}
	return smallestName;
}
 console.log(
tinyFriend(["Sajjad", "Sojol", "Habib", "Noyon", "Rakib", "Lalu"])
);