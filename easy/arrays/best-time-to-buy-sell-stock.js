/**
 * @param {number[]} prices
 * @return {number}
 */

/**
 * Problem: Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Date: November 3, 2025
 *
 * Problem: Given an array of prices where prices[i] is the price of a stock on day i,
 * find the maximum profit. You can only buy once and sell once.
 *
 * Approach: Track minimum price seen so far and calculate max profit at each step
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }

  return maxProfit;
};

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected: 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // Expected: 0

module.exports = maxProfit;
