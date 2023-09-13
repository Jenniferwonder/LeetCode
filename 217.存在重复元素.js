/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 二版：哈希表
var containsDuplicate = function (nums) {
	let dict = {};
	for (let i = 0; i < nums.length; i++) {
		if (dict.hasOwnProperty(nums[i])) {
			return true;
		} else {
			dict[nums[i]] = i;
		}
	}
	return false;
};
// @lc code=end

// containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);

// 一版：includes() 方法，超时
/* var containsDuplicate = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums.slice(i + 1, nums.length).includes(nums[i])) {
			return true;
		}
	}
	return false;
}; */
