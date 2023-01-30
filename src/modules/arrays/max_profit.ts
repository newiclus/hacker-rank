/*
You are given an array prices where prices[n] is the price of a given stock on the nth day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example:

Input: prices = [7,1,3,5,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

function MaxProfit(prices: number[]): number {
  let maxProfit = 0;
  let lower = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (lower > prices[i]) {
      lower = prices[i];
    } else if (maxProfit < prices[i] - lower) {
      maxProfit = prices[i] - lower;
    }
  }

  return maxProfit;
}

export default MaxProfit;
