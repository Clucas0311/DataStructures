/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.

Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]

Input: l1 = [0], l2 = [0]
Output: [0]

STEPS: This is similar to the Add Two Numbers I but this time the linked list is not in 
reverse order, So a great solution would be to put the two linked list into 
two stacks and when adding the values we will pop each node off the back 
This will then reverse our two linked list so we will then have to reverse the linked list
back to its proper position 

So create a stack of both the linked list so create two stack and push the contents into 
each one 
so p1 = [l1] and p2 = [l2] --> we do this with a while loop 

After the nodes are in  each stach we then iterate again if the loop will run as long as one 
of the stack as elements. if (p1.length !== 0) || p2.length !== 0; 
Now we need to create a sum  variable to add up each element in the stacks 
let sum = x + y + carry 
let x = so if the stack is not empty then pop then x will be that pop element otherwise it will be 0
let y = so if the stack is not empty then pop the element from p2 otherwise it will be 0

To get the carry Value we will have to Math.floor(sum / 10) dividing by 10 gives us the the numbers that aren't remainder 
next create a new list node that will have the remainder which is the sum % 10

For example say you add 8 + 8  this equals 16
When you divide 16/10 this will be 1.6 --> 1 will be the carry value and 6 will be the next node. We want to add the carry to our next elements
Then reverse the new Linked list back into proper order. 
*/

/**
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
 */
var addTwoNumbers = function (l1, l2) {
	if (!l1) return l2;
	if (!l2) return l1;
	let p1 = [];
	let p2 = [];
	while (l1) {
		p1.push(l1.val);
		l1 = l1.next;
	}

	while (l2) {
		p2.push(l2.val);
		l2 = l2.next;
	}

	let carry = 0;
	let dummyHead = new ListNode(0);
	let head = dummyHead;
	while (p1.length !== 0 || p2.length !== 0) {
		let x = p1.length !== 0 ? p1.pop() : 0;
		let y = p2.length !== 0 ? p2.pop() : 0;
		let sum = x + y + carry;
		carry = Math.floor(sum / 10);
		dummyHead.next = new ListNode(sum % 10);
		dummyHead = dummyHead.next;
	}
	if (carry > 0) {
		dummyHead.next = new ListNode(1);
	}

	return reverse(head.next);

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
