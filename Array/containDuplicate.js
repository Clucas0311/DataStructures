/*
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.


Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


*/

const containsDuplicates = function (nums) {
	// create a new set to hold element values
	let numbers = new Set();
	// iterate through the nums array
	for (let num of nums) {
		// if the set doesn't have the element
		if (numbers.has(num)) {
			// add that element to the set
			numbers.add(num);
			// otherwise that element is a duplicate so return true
		} else {
			return true;
		}
	}
	// if the set is complete than they're no duplicates --> return false
	return false;
};

console.log(containsDuplicates([1, 2, 3, 1])); // true
