/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Rv-1 20241221 Good
var rotate = function (nums, k) {
  let n = nums.length
  if (n == 1) return
  k = k % nums.length
  function reverse(nums, start, end) {
    while (start < end) {
      let temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      start++
      end--
    }
  }
  reverse(nums, 0, n - k - 1)
  reverse(nums, n - k, n - 1)
  reverse(nums, 0, n - 1)
}
// @lc code=end
