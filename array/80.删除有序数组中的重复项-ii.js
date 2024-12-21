/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// R1-20241215
var removeDuplicates = function (nums) {
  if (nums.length < 3) return nums.length
  let k = 2
  for (let i = 2; i < nums.length; i++) {
    if (nums[k - 2] === nums[k - 1] && nums[k - 1] === nums[i]) {
      continue
    } else {
      nums[k] = nums[i]
      k++
    }
  }
  return k
}
// @lc code=end
