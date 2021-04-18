/*
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs.

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
*/

const numIdenticalPairs = function (nums) {
	// create a hashMap to count up all the occurences
	const hashMap = {};
	// create a counter variable to add up the occurences
	let counter = 0;
	// iterate the nums array
	for (let i = 0; i < nums.length; i++) {
		const currentElem = nums[i];
		// if the hashMap[currentElement] exist
		if (hashMap[currentElem]) {
			// counter gets incremented with value
			counter += hashMap[currentElem];
			// and increment the value of hashMap
			hashMap[currentElem]++;
		} else {
			// otherwise add one to the hashMap[currentElem] if no value exists
			hashMap[currentElem] = 1;
		}
	}
	// return the counter
	return counter++;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
