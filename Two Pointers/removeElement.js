/*Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3]
Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.
*/

const removeElement = function (nums, val) {
	// create a pointer1 to access the first element and be counter
	let pointer1 = 0;
	// iterate creating pointer2 at index 0
	for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
		// if the nums[pointer2] !== val we want to eliminate then
		if (nums[pointer2] !== val) {
			// reassign the value of nums[pointer1] = nums[pointer2]
			nums[pointer1] = nums[pointer2];
			// increment pointer1 up to move the count and position
			pointer1++;
		}
	}
	// just return pointer1 at its last position
	return pointer1;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //5
