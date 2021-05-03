/* Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	// Create a dummy head and insert it at the first postion with the current head being its next value
	let dummyHead = new ListNode(0, head);
	// create a left pointer which will have access to the dummyHead
	let left = dummyHead;
	// a right pointer which will have access to the current head
	let right = head;

	// iterate and shift the right pointer based on n's position
	while (n > 0 && right) {
		right = right.next;
		// decrement n
		n -= 1;
	}
	// while right pointer is not a null iterate
	while (right) {
		// shift both right and left pointers
		left = left.next;
		right = right.next;
	}
	// when loop is finished right should be on null left should be one node of the node we want to remove
	// so reassign the left node's next value to the next next postion skipping over the deleted node
	left.next = left.next.next;
	// return the dummy head excluding the 0
	return dummyHead.next;
};
