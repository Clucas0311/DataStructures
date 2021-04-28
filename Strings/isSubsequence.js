/*  
Given two strings s and t, check if s is a subsequence of t.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false


*/

var isSubsequence = function (s, t) {
	// create two pointers to access both the subsequence and the word
	let sIdx = 0;
	let tIdx = 0;
	// loop as long as index is bounded with subsequence and words
	while (sIdx < s.length && tIdx < t.length) {
		// if they equal
		if (s[sIdx] === t[tIdx]) {
			// move the sub pointer
			sIdx++;
		}
		// always move the word pointer
		tIdx++;
	}
	// if the subsequence length is met end iteration
	return sIdx === s.length;
};

console.log(isSubsequence('abc', 'ahbgdc')); // true
