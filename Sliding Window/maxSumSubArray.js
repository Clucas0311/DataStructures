/* Given an array of positive numbers and a positive number ‘k,’
 find the maximum sum of any contiguous subarray of size ‘k’.

 Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Steps: 
This is a sliding window problem, the objective is to remove the first element and add the next element
Edge Case: if the size is greater than the array length return null;  
create a maxSum = 0
create a tempSum = 0
For example 
[2, 1, 5, 1, 3, 2] 
First find the max of the first three elements 2 + 1 + 5 = 8 maxSum = 8
This will be done by iterating through the array and adding all the elements with the length of k
Next create a temp variable to hold that max so we can compare to all elements within the array
tempSum = 8
now iterate a second time starting at num through the array 
this will allow us to remove the first element and  add the current element which will be 1
[2, 1, 5, 1, 3, 2]
          [     ]
 remove 2 and add 1
 now update the max each time until you find the maximum num of the three subarray elements

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
