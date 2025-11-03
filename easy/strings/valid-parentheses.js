/**
 * Problem: Valid Parentheses
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/valid-parentheses/
 * Date: November 3, 2025
 * 
 * Problem: Determine if string of brackets is valid (must close in correct order)
 * 
 * Approach: Use stack to track opening brackets, pop and match when closing
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var isValid = function(s) {
    let stack = [];
    let openList = ['(', '{', '[']
    let closeList = [')', '}', ']']
    
    for (let c of s) {
        if(openList.includes(c)){
            stack.push(c)
        }
        if(closeList.includes(c)){
            let poppedVal = stack.pop();
            if(poppedVal !== openList[closeList.indexOf(c)]) return false
        }
    }
    
    return stack.length === 0;
};

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

module.exports = isValid;
