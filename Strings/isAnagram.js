/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

const isAnagram = function (string1, string2) {
	// check to see if the two strings are equal in length if not return false
	if (string1.length !== string2.length) return false;
	// create a hashMap to get all the char occurances in the string1 to compare to string2
	const charMap = {};
	// iterate through string one to get all its characters
	for (let letter of string1) {
		// if the charMap has a letter already in the map
		if (charMap[letter]) {
			// add one to its value
			charMap[letter]++;
		} else {
			// otherwise assign that value to 1
			charMap[letter] = 1;
		}
	}
	// iterate through the string2
	for (let char of string2) {
		// if the charMap at that letter of string 2 doesn't exist and equals zero return false
		if (!charMap[char]) return false;
		// if the value exist decremet it from the charMap resulting in hashMap that is empty
		charMap[char]--;
	}
	// if it passes both statements return true because it is an anagram
	return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true;
console.log(isAnagram('rat', 'car')); //false;
