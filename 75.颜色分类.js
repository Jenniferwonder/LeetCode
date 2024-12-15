/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// R1-20241215 Hard
var sortColors = function (nums) {
  // 0: a[0...j] j = -1
  // 1: a[j+1...i-1] i = 0
  // 2: a[k..n-1] k = n
  let i = 0,
    j = -1,
    k = nums.length
  // Use while loop to only increment i when nums[i]==1/0
  while (i < k) {
    if (nums[i] == 0) {
      j++
      nums[i] = nums[j]
      nums[j] = 0
      i++
    } else if (nums[i] == 2) {
      k--
      nums[i] = nums[k]
      nums[k] = 2
    } else {
      i++
    }
  }
  return nums
}
// sortColors([2, 0, 2, 1, 1, 0])
// sortColors([1, 2, 0])
// sortColors([0, 1, 2])
// @lc code=end
