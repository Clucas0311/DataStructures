/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]

[8, 1, 2, 2, 3] ---> [4, 0, 1, 1, 3]
make a copy and sort the array in ascending order [1, 2, 2, 3, 8]
search the sorted element while iterating through nums array  when match is found push index into new array
*/

const smallerNumber = function (nums) {
	// first make a copy and sort the nums array in ascending order
	const sorted = [...nums].sort((a, b) => a - b);
	// create a container to store the index of the elements when they occur
	const container = [];
	// iterate through the nums array
	for (let i = 0; i < nums.length; i++) {
		// search the sorted array for the index in which the nums[i] occurs and push it into the array
		container.push(sorted.indexOf(nums[i]));
	}
	// return the container
	return container;
};
console.log(smallerNumber([8, 1, 2, 2, 3])); //[4,0,1,1,3]
