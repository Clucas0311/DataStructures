/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
Merge two sorted linked lists and return it as a sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
*/

const mergeTwoLists = function (l1, l2) {
	// first create a dummyHead to attach to the smallest node
	let dummyHead = new ListNode(0);
	// get reference to the dummyHead
	let head = dummyHead;
	// if the one of the list doesn't exist return one or the other
	if (!l1) return l2;
	if (!l2) return l1;
	//iterate while the two list aren't null
	while (l1 !== null && l2 !== null) {
		// if l1 value is less than or equal to l2 value
		if (l1.val <= l2.val) {
			// then update dummyHead's next pointer to the l1
			dummyHead.next = l1;
			// move the l1 to its next value
			l1 = l1.next;
			// otherwise
		} else {
			// do update dummyHead's pointer to l2
			dummyHead.next = l2;
			// move the l2 to its next value
			l2 = l2.next;
		}
		// update dummyHeads reference to it's next value
		dummyHead = dummyHead.next;
		// When one of the list gets to null attach the next pointer to the one that isn't null
		// if l1 isn't null
		if (l1 !== null) {
			// then attach the dummyHead next value to l1
			dummyHead.next = l1;
		} else {
			// otherwise attach to it to l2
			dummyHead.next = l2;
		}
	}
	// return the head.next --> excluding dummyHead
	return head.next;
};
