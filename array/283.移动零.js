/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i]
      if (i !== k) {
        nums[i] = 0
      }
      k++
    }
  }
  return nums
}
// moveZeroes([0, 1])
// @lc code=end
