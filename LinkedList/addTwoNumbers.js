/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains
 a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

* Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * 
 * 
 * 

Think of this problem like childhood math solving 
carry
    1
      243
	+ 564
	______
	  8 0 7

	so create a linked list doing this approach where we will attach the head the sum to the dummyHead
	and add the carry to the sum if there is reset the carry every time
	REMEMBER to get the single digit we will use modulo operator  the sum by 10 and to get the carry we will divide the sum by 10
 */

var addTwoNumbers = function (l1, l2) {
	// create a dummyHead to attach the new sum linked list to
	let dummyHead = new ListNode(0);
	// create a reference to the dummyHead
	let head = dummyHead;
	// get the head of both linked list
	let p1 = l1;
	let p2 = l2;
	// set the carry value to be 0
	let carry = 0;
	// while either linked list is not null iterate
	while (p1 !== null || p2 !== null) {
		// get the x and y value --> which is the  current value of linked list if not null otherwise it will be 0
		let x = p1 !== null ? p1.val : 0;
		let y = p2 !== null ? p2.val : 0;
		// the sum is going to be x + y + the carry value
		let sum = x + y + carry;
		// reset carry during each iteration;
		// With carry we want the first two numbers so it will be the summ floored
		carry = Math.floor(sum / 10);
		// create a next node that will have remainder value of the sum
		dummyHead.next = new ListNode(sum % 10);
		// move the dummyHead to next pointer
		dummyHead = dummyHead.next;
		// move the value of p1 and p2 for each iterationg
		if (p1 !== null) {
			p1 = p1.next;
		}
		if (p2 !== null) {
			p2 = p2.next;
		}
	}
	// if carry has a value than add it to the front of the linked list
	if (carry > 0) {
		dummyHead.next = new ListNode(1);
	}
	// return the head's next value
	return head.next;
};
