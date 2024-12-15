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
// R5-20241018; Good
var containsDuplicate = (nums) => {
	const dict = {};
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
// R4-20240217; Good
// var containsDuplicate = function (nums) {
// 	let dict = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		if (dict.hasOwnProperty(nums[i])) {
// 			return true;
// 		} else {
// 			dict[nums[i]] = i;
// 		}
// 	}
// 	return false;
// };
// R3-20231127; Good
/* var containsDuplicate = function (nums) {
	let dic = {};
	for (let i = 0; i < nums.length; i++) {
		if (dic.hasOwnProperty(nums[i])) {
			return true;
		} else {
			dic[nums[i]] = i;
		}
	}
	return false;
}; */

// R2-20230925; Good
// var containsDuplicate = function (nums) {
// 	let dic = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		if (dic.hasOwnProperty(nums[i])) {
// 			return true;
// 		} else {
// 			dic[nums[i]] = i;
// 		}
// 	}
// 	return false;
// };

// 二版：哈希表 R1-20230921; Good
/* var containsDuplicate = function (nums) {
	let dict = {};
	for (let i = 0; i < nums.length; i++) {
		if (dict.hasOwnProperty(nums[i])) {
			return true;
		} else {
			dict[nums[i]] = i;
		}
	}
	return false;
}; */
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
