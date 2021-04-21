/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

*/

const moveZeros = function (nums) {
	// create a pointer variable to swap with the current element that doesn't equal zero
	let anchor = 0;
	// iterate through the nums array
	for (let explorer = 0; explorer < nums.length; explorer++) {
		// if the current element doesnt equal 0
		if (nums[explorer] !== 0) {
			// then swap
			let temp = nums[anchor];
			nums[anchor] = nums[explorer];
			nums[explorer] = temp;
			anchor++;
		}
	}
	return nums;
};

console.log(moveZeros([0, 1, 0, 3, 12])); //[1,3,12,0,0]
