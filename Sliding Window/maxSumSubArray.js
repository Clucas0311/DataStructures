/* Given an array of positive numbers and a positive number ‘k,’
 find the maximum sum of any contiguous subarray of size ‘k’.

 Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

// iterate through the array to get the sum of the length of k
// check to see if the temp sum is greateter than the previous max sum
 */

const max_sub_array_of_size_k = function (k, arr) {
	// create two helper variables to calculate the maxSum and tempSum
	let maxSum = 0;
	let tempSum = 0;
	// iterate through the array to get the sum of the elements up to k
	if (arr.length < k) return null;
	for (let i = 0; i < k; i++) {
		maxSum += arr[i];
	}
	// reassign the value of tempSum to maxSum value
	tempSum = maxSum;
	// iterate through the arr starting at the k
	for (let i = k; i < arr.length; i++) {
		// reassign tempMax to be the tempMax minus the first element plus the new element
		tempSum = tempSum - arr[i - k] + arr[i];
		// get the new max by using Math.max(maxSum, tempSum)
		maxSum = Math.max(maxSum, tempSum);
	}
	// return new max
	return maxSum;
};

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])); //9
