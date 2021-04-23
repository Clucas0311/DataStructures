/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1

123 
remaining Math.floor(12 / 10) = 1
1 % 10 = ones place = 
result  32 * 10  = 320 
result +=  remaining % 10 --> 30 + 2 ---> 32 ---> 320 + 1 ---> 321
remaining = Math.floor(12 / 10) --> 1
*/

const reverse = function (x) {
	// create a variable to reverse the integer
	let result = 0;
	// convert x into a positive number if negative
	let remaining = Math.abs(x);
	// while remaining is not reduced to 0
	while (remaining !== 0) {
		// multiply the results by 10 to add the next element to it
		result *= 10;
		// add the next number to the result
		result += remaining % 10;
		// get the new remaining value
		remaining = Math.floor(remaining / 10);
	}
	if (result > 2 ** 31 - 1) return 0;
	// if  x is negative give back its negative otherwise keep the same
	return x < 0 ? -result : result;
};

console.log(reverse(123)); // 321
