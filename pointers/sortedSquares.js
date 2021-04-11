/*
Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

const sortedSquares = function (nums) {
	// get the length of the nums array and create a new array and fill it with all zeros at the nums length
	const len = nums.length;
	const sortedSquares = Array(len).fill(0);
	// create two pointers to access the first and last indices
	let left = 0;
	let right = nums.length - 1;
	// iterate the array in reverse so we can populate the sortSquare array with the largest at the end
	for (let i = nums.length - 1; i >= 0; i--) {
		let smallest = nums[left];
		let largest = nums[right];
		// if the abs value of the nums[left] is greater nums[right]
		if (Math.abs(smallest) > Math.abs(largest)) {
			// then reassign the sortedSqaure[i] to the squared value of nums[left]
			sortedSquares[i] = smallest ** 2;
			// move the left pointer up
			left++;
			// otherwise
		} else {
			// reassign the sortedSquare[i] = squared of the right side
			sortedSquares[i] = largest ** 2;
			// move the right pointer down
			right--;
		}
	}
	// return the new sortedSqaures array
	return sortedSquares;
};
console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
