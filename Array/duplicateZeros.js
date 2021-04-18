/*
Given a fixed length array arr of integers, duplicate each occurrence of zero, 
shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written.
Do the above modifications to the input array in place, do not return anything from your function.

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
*/

const duplicateZeros = function (arr) {
	// iterate through the arr
	for (let i = 0; i < arr.length; i++) {
		// if the current element equals 0
		if (arr[i] === 0) {
			// then insert 0 at that index
			arr.splice(i, 0, 0);
			// then skip over the inserted 0
			i++;
			// and remove the last element to keep the arr in bounds
			arr.pop();
		}
	}
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
