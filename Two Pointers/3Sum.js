/*Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Input: nums = []
Output: []
*/

const threeSum = function (nums) {
	// sort the array in ascending order
	nums.sort((a, b) => a - b);
	// create a triplets array container to hold triplet arrays
	const triplets = [];
	// iterate through the array only grabbing three elements
	for (let i = 0; i < nums.length - 2; i++) {
		// if the current element is at 0 or when its greater then zero its previous element doesn't equal the same value
		if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
			// create two pointers to access the next element and last element --> two sum
			let left = i + 1;
			let right = nums.length - 1;
			// while the two pointers don't overlap iterate
			while (left < right) {
				let currentSum = nums[i] + nums[left] + nums[right];
				// if the currentSum equals 0
				if (currentSum === 0) {
					// push the elements into the triplet array
					triplets.push([nums[i], nums[left], nums[right]]);
					// check to see if the pointers have any duplicates if they do skip over the element
					while (left < right && nums[left] === nums[left + 1]) left++;
					while (left < right && nums[right] === nums[right - 1]) right--;
					// move both pointers
					left++;
					right--;
					// otherwise if currentSum > 0
				} else if (currentSum > 0) {
					// move the right pointer down
					right--;
					// otherwise if currentSum < 0
				} else if (currentSum < 0) {
					// move the left pointer up
					left++;
				}
			}
		}
	}
	// return the triplet array
	return triplets;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
