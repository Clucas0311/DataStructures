/* 
Given an array nums of integers, return how many of them contain an even number of digits.

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
*/

var findNumbers = function (nums) {
	// create a counter to increment the elements that are even
	let counter = 0;
	// iterate through the nums array
	for (let element of nums) {
		// convert the each element into a string and get the length if the length is even
		if (String(element).length % 2 === 0) {
			// then increment counter
			counter++;
		}
	}
	// return counter
	return counter;
};

console.log(findNumbers([12, 345, 2, 6, 7896])); //2
