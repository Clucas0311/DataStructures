/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
*/

const generate = function (numRows) {
	// build the rows for the arrays which will be an array of numRows
	const pascalTriangle = new Array(numRows);
	// iterate through as long as you have numRows
	for (let i = 0; i < numRows; i++) {
		const row = new Array(i + 1);
		// the first and last elements need to be 1 in the triangle
		row[0] = 1;
		row[row.length - 1] = 1;
		// iterate through the row to populate each row;
		// REMEMBER we have the first and last elements already so start iteration between those
		for (let j = 1; j < row.length - 1; j++) {
			// get access to the row above summing up the previous and current values will give you the row element
			let rowAbove = pascalTriangle[i - 1];
			row[j] = rowAbove[j] + rowAbove[j - 1];
		}
		// create the row for the pascalTriangle at that particular index
		pascalTriangle[i] = row;
	}
	// return the full pascalTriangle;
	return pascalTriangle;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
