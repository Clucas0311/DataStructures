/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0

*/

const lengthOfLongestSubstring = function (string) {
	// Create a set to hold all unique elements
	const set = new Set();
	// create a left and right pointer to measure the length of substrings
	let left = 0;
	let right = 0;
	// create a variable maxLengthSubString to update the max everytime it gets longer than the previous
	let maxSubString = 0;
	// iterate while right is less than the string length
	while (right < string.length) {
		// if the set doens't have the char
		if (!set.has(string.charAt(right))) {
			// then add it to the set
			set.add(string.charAt(right));
			// update the max on the new substring length which will be the size of the set and prev max
			maxSubString = Math.max(maxSubString, set.size);
			// increment the right pointer to check the next element
			right++;
			// if there are duplicates
		} else {
			// delete the char from the set at that left position
			set.delete(string.charAt(left));
			// increment the left position
			left++;
		}
	}
	// return the maxSubstringLength
	return maxSubString;
};

console.log(lengthOfLongestSubstring('abcabcbb')); //3
