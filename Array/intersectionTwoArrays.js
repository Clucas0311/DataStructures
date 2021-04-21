/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

// unique value === set!!
*/

const intersection = function (nums1, nums2) {
	// get the unique the values of the nums array using a set, and iteration
	const firstSet = new Set();
	for (let num of nums1) {
		if (!firstSet.has(num)) {
			firstSet.add(num);
		}
	}
	// create another set and search the the second array for similar values in first set
	const intersectionSet = new Set();
	for (let num of nums2) {
		if (firstSet.has(num)) {
			intersectionSet.add(num);
		}
	}
	// convert the set to an array
	return Array.from(intersectionSet);
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
