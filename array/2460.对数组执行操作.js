/*
 * @lc app=leetcode.cn id=2460 lang=javascript
 *
 * [2460] 对数组执行操作
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// R1-20241215 Medium
var applyOperations = function (nums) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      continue
    } else if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
      nums[i] = nums[i] * 2
      nums[i + 1] = 0
    }
    nums[k] = nums[i]
    k++
  }
  for (let j = k; j >= k && j < nums.length; j++) {
    nums[j] = 0
  }
  return nums
}
// @lc code=end
