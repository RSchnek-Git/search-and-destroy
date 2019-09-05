'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let remainingArray = []
	if(array.length <= 2){
		if(array[0] === target || array[1] === target){
			console.log("array[0]:", array[0])
			console.log("array[1]:", array[1])
			console.log("array:", array)
			return true
		} else {
			console.log("FALSE!!!!")
			return false
		}
	}
	// let i = 0
	// let j = array.length-1
	// while( i <= j && array.length > 1 ){
	// 	if (array[i] === target || array[j] === target){
	// 		return true
	// 	} else {
	// 		i++
	// 		j--
	// 	}
	// }
	// return false
	let median = Math.floor(array.length/2)
	if(array[median]===target){
		return true
	} else {
		remainingArray = target < array[median] ? array.slice(0,median) : array.slice(median)
		return binarySearch(remainingArray, target);
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch