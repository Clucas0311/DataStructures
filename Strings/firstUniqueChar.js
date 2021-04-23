/*
Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/

const firstUniqChar = function (string) {
	// create a freq counter to count the occurances of each letter
	const charMap = {};
	for (let letter of string) {
		charMap[letter] = charMap[letter] + 1 || 1;
	}
	// iterate through the string to check the hashMap to see if it equals one
	for (let i = 0; i < string.length; i++) {
		// if the hash map key which is the string[i] equals 1 then return the index
		if (charMap[string[i]] === 1) return i;
	}
	// otherwise return -1
	return -1;
};

console.log(firstUniqChar('loveleetcode')); //2
