/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

const longestCommonPrefix = function (string) {
	// EDGE CASE: if the str length is empty just return an empty str
	if (string.length === 0) return false;
	// Use the first element as the prefix
	let prefix = string[0];
	// iterate through the string starting at next element
	for (let i = 1; i < string.length; i++) {
		// iterate through the string element and search for the prefix until the index is 0
		while (string[i].indexOf(prefix) !== 0) {
			// slice out the last element of the prefix until there is a match
			prefix = prefix.slice(0, prefix.length - 1);
		}
	}
	// return prefix
	return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // fl
