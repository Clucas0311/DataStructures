/* Given the head of a singly linked list, return true if it is a palindrome.


Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9

Setup: This Linked List Problem will be using the fast and slow technique the tortise and the hare
You will be creating two pointers a slow and a fast both will be at the head position of the list
the slow is going to move one node up while the fast will move two nodes up
The whole objective is to move the fast pointer to the end of the list and have the slow pointer reach the middle
Once the slow reaches the middle we will reset the fast pointer to the head position and reverse the slow pointer
We wil then check to see if the slow value in reverse equals the fast value going forward
if either one the values don't equal each other then it false, otherwise it is true. 

slow pointer moves by one 
fast pointer moves by two
*/

var isPalindrome = function (head) {
	//create a slow pointer and fast pointer and assign it to the head
	let slow = head;
	let fast = head;
	// iterate through the linked list get the slow pointer to the midpoint
	while (fast !== null && fast.next !== null) {
		// slow will move one node during each iteration
		slow = slow.next;
		// fast will move two nodes each iteration
		fast = fast.next.next;
	}
	// Reset the fast back to the head position
	fast = head;
	// reverse the slow pointer which each at the middle
	slow = reverse(slow);

	// while the slow position is not at the end of the linked list move
	while (slow !== null) {
		// if the slow reverse value doesn't equal the fast value
		if (slow.val !== fast.val) {
			// solution is not a palindrome
			return false;
		}
		// otherwise move the pointers
		slow = slow.next;
		fast = fast.next;
	}
	// return true if it exits this loop because it is a palindrome
	return true;
	// Create reverse helper method
	// This is just reversing a linked list
	function reverse(head) {
		let p1 = null;
		let p2 = head;
		while (p2) {
			let p3 = p2.next;
			p2.next = p1;
			p1 = p2;
			p2 = p3;
		}
		return p1;
	}
};
