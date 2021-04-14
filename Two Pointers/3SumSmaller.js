/*
Given an array of n integers nums and an integer target, find the number of index triplets 
i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target

Input: nums = [-2,0,1,3], target = 2
Output: 2
Explanation: Because there are two triplets which sums are less than 2:
[-2,0,1]
[-2,0,3]
*/

const threeSumSmaller = function (nums, target) {
	// create a counter variable to add up possible combos
	let counter = 0;
	// sort the nums array in ascending order
	nums.sort((a, b) => a - b);
	// iterate through the array saying room for pointers
	for (let i = 0; i < nums.length - 2; i++) {
		// create two pointers
		let left = i + 1;
		let right = nums.length - 1;
		// iterate while the two pointers don't overlap
		while (left < right) {
			let currentSum = nums[i] + nums[left] + nums[right];
			// if the currentSum is less than the target
			if (currentSum < target) {
				// add onto the counter the right minus left
				counter += right - left;
				// move left pointer up
				left++;
				// otherwise move right pointer
			} else {
				right--;
			}
		}
	}
	// return counter
	return counter;
};

console.log(threeSumSmaller([-2, 0, 1, 3], 2)); //2
