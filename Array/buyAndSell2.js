/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete as many transactions as you like 
(i.e., buy one and sell one share of the stock multiple times).
Note: You may not engage in multiple transactions simultaneously 
(i.e., you must sell the stock before you buy again).

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e., max profit = 0.

[7,1,5,3,6,4]
= -6 
= +4 
= -2
= + 3
= +2

*/

const maxProfit = function (prices) {
	// accumulate the profit overtime
	let profit = 0;
	// iterate starting at 1
	for (let i = 1; i < prices.length; i++) {
		// compare the current element and previous if the current is greater than
		if (prices[i] > prices[i - 1]) {
			// add the result to profit overtime
			profit += prices[i] - prices[i - 1];
		}
	}
	// return profit
	return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //7
