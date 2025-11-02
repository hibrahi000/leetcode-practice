/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * Problem: Two Sum
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/two-sum/
 * Date: November 3, 2025
 *
 * Problem: Given an array of integers and a target, return indices of
 * the two numbers that add up to target.
 *
 * Approach: Hash map to store complements
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var twoSum = function (nums, target) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (compliment in seen) return [seen[compliment], i];
    seen[nums[i]] = i;
  }
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0,1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1,2]

module.exports = twoSum;
