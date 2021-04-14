/* Given an array nums of n integers and an integer target, 
 find three integers in nums such that the sum is closest to target. 
 Return the sum of the three integers. You may assume that each input 
 would have exactly one solution.

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

const threeSumClosest = function (nums, target) {
	let results = Infinity;
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length - 2; i++) {
		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			let currentSum = nums[i] + nums[left] + nums[right];
			if (Math.abs(currentSum - target) < Math.abs(results - target)) {
				results = currentSum;
			} else if (currentSum === target) {
				return currentSum;
			} else if (currentSum > target) {
				right--;
			} else if (currentSum < target) {
				left++;
			}
		}
	}
	return results;
};
console.log(threeSumClosest([-1, 2, 1, -4], 1)); //2
