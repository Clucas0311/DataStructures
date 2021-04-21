/* 
Given a non-empty array of decimal digits representing a non-negative integer
, increment one to the integer.
The digits are stored such that the most significant digit is at the head of the list, 
and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Example 3:

Input: digits = [0]
Output: [1]

*/

const plusOne = function (digits) {
	// iterate through the array reverse
	for (let i = digits.length - 1; i >= 0; i--) {
		// if the current elemennt is less than 9
		if (digits[i] < 9) {
			// increment the value
			digits[i]++;
			// and return the array with the incremented value
			return digits;
		} else {
			// Otherwise the value equals 9 change that value to 0 and the next iteration the value increases by 1
			digits[i] = 0;
		}
	}
	// if all values are 9 [9, 9, 9] --> then it should be connverted to all zero by add one to the front
	digits.unshift(1);
	return digits;
};
console.log(plusOne([1, 2, 3])); //[1, 2, 4]
console.log(plusOne([9, 9, 9])); //[1, 0, 0, 0]
