/*
Given an m x n matrix, return all elements of the matrix in spiral order.
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

const spiralOrder = function (matrix) {
	// create a container to push elements into
	const container = [];
	// create pointers to access the matrix in specific positions
	let startRow = 0;
	let endRow = matrix.length - 1;
	let startCol = 0;
	let endCol = matrix[0].length - 1;
	// iterate until the boundary pointers overlap
	while (startCol <= endCol && startRow <= endRow) {
		// iterate to get all the elements in the first row
		for (let col = startCol; col <= endCol; col++) {
			// push into the container the first row
			container.push(matrix[startRow][col]);
		}
		// traverse the matrix for the right boundary row exluding the first element
		for (let row = startRow + 1; row <= endRow; row++) {
			// push into container the row elements at the end column
			container.push(matrix[row][endCol]);
		}
		// get the bottom border by reversing the row and moving the endCol over
		for (let col = endCol - 1; col >= startCol; col--) {
			// if the rows are the same  exit the loop --> double traversal
			if (startRow === endRow) break;
			// push into container bottom row
			container.push(matrix[endRow][col]);
		}
		// get the let row boundary elements by moving the endRow position up
		for (let row = endRow - 1; row > startRow; row--) {
			// if the cols are the same exit out the loop
			if (startCol === endCol) break;
			container.push(matrix[row][startCol]);
		}

		// move the pointers inward for inner traversal
		startCol++;
		endCol--;
		startRow++;
		endRow--;
	}
	// return container;
	return container;
};

console.log(
	spiralOrder([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	])
); //[1,2,3,6,9,8,7,4,5]
