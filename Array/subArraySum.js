/*
Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.


Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

*/

const subArraySum = function (nums, k) {
	// create a hashMap intializing the key : value to 0:1  --> currentSum starts at 0 and seen once
	const hashMap = { 0: 1 };
	// create a currentSum and counter variable to accumulate overtime
	let currentSum = 0;
	let counter = 0;
	// iterate through the array to search to see if any of the hashMap values have occured
	for (let num of nums) {
		// accumulate the currentSum
		currentSum += num;
		// if the currentSum - k is a value in the hashMap
		if (hashMap[currentSum - k]) {
			// add the value to the counter
			counter += hashMap[currentSum - k];
		}
		// construct hashMap
		hashMap[currentSum] = hashMap[currentSum] + 1 || 1;
	}
	// return counter
	return counter;
};

console.log(subArraySum([1, 1, 1], 2)); // 2
