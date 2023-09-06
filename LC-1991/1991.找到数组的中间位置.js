/*
 * @lc app=leetcode.cn id=1991 lang=javascript
 *
 * [1991] 找到数组的中间位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
	let length = nums.length;
	const total = nums.reduce((prev, cur) => prev + cur, 0);
	let sum = 0;
	for (let i = 0; i < length; i++) {
		if (2 * sum + nums[i] === total) {
			return i;
		}
		sum += nums[i];
	}
	return -1;
};
// @lc code=end

// var findMiddleIndex = function (nums) {
// 	let middleIndex;
// 	let length = nums.length;
// 	switch (length) {
// 		case (length = 1):
// 			return (middleIndex = 0);
// 		case (length = 2):
// 			if ((nums[length - 1] = 0)) {
// 				return (middleIndex = 0);
// 			} else {
// 				return -1;
// 			}
// 		case length > 2:
// 			for (let i = 0; i < length - 1; i++) {}
// 	}
// };
