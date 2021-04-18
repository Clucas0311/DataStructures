/* Given a binary array nums, return the maximum number of consecutive 1's in the array.
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

*/

const findMaxConsecutiveOnes = function (nums) {
	// create helper variables max and counter
	let max = 0;
	let counter = 0;
	// iterate through the nums array
	for (let i = 0; i < nums.length; i++) {
		// if the current element equals 1
		if (nums[i] === 1) {
			// then increment counter
			counter++;
			// update the current max
			max = Math.max(max, counter);
			// otherwise
		} else {
			// reset counter to 0
			counter = 0;
		}
	}
	// return max
	return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); //3
