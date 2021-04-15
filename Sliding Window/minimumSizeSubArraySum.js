/*
Given an array of positive integers nums and a positive integer target, 
return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr]
 of which the sum is greater than or equal to target. If there is no such subarray, 
 return 0 instead.

 Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
*/

var minSubArrayLen = function (target, nums) {
	// create a variable to update the minLength value to infinity
	let minLength = Infinity;
	// create a sum variable total sum
	let sum = 0;
	// pointer for starting index
	let windowStart = 0;
	// iterate creating a pointer that will move based on the sum
	for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
		// add up the sum based on each iteration
		sum += nums[windowEnd];
		// while the sum is greater than or equal to target value
		while (sum >= target) {
			// minLength value will be updated with the previous minLength and the length of subset
			minLength = Math.min(minLength, windowEnd + 1 - windowStart);
			// now we have a new min  slide the window up to find a other combos
			sum -= nums[windowStart];
			// move the starting pointer up
			windowStart++;
		}
	}
	// if there is no subArray return 0
	return minLength !== Infinity ? minLength : 0;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); //2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
