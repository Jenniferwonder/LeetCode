/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// Review #1: 20230923; Difficult
var removeDuplicates = function (nums) {
	// Two-Pointers
	let slow = 1;
	for (let fast = 1; fast < nums.length; fast++) {
		if (nums[fast] !== nums[fast - 1]) {
			nums[slow] = nums[fast];
			slow++;
		}
	}
	return slow;
};
// @lc code=end
// 二版：双指针，利用快指针遍历数组去重，慢指针追踪唯一元素
/* var removeDuplicates = function (nums) {
	let slow = 1;
	for (let fast = 1; fast < nums.length; fast++) {
		if (nums[fast] !== nums[fast - 1]) {
			nums[slow] = nums[fast];
			slow++;
		}
	}
	return slow;
}; */

// 测试数据
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// 一版：会删除原数组元素
/* var removeDuplicates = function (nums) {
  for (let i = nums.length - 1; i > 0; i--) {
      if (nums[i] === nums[i - 1]) {
          // 从 i 位置(含 i) 删除 1 个元素
          nums.splice(i, 1);
      }
  }
  
  return nums.length;
}; */

// 无效版本
// nums[right] = nums[right + 1];
// left = right;
// right = right + 1;
