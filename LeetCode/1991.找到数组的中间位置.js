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
// R4-20240217; Good
var findMiddleIndex = function (nums) {
	let total = nums.reduce((prev, cur) => prev + cur, 0);
	let totalHalf = 0;
	for (let i = 0; i < nums.length; i++) {
		if (totalHalf * 2 + nums[i] === total) {
			return i;
		}
		totalHalf += nums[i];
	}
	return -1;
};
// @lc code=end
// R3-20231209; Good
/* var findMiddleIndex = function (nums) {
	// Get the sum of whole array values
	let sum = nums.reduce((prev, cur) => prev + cur, 0);
	let totalHalf = 0;
	for (let i = 0; i < nums.length; i++) {
		if (totalHalf * 2 + nums[i] === sum) {
			return i;
		}
		totalHalf += nums[i];
	}
	return -1;
}; */
// R2-20230922; Good
/* var findMiddleIndex = function (nums) {
	// Sum of all array numbers
	let total = nums.reduce((prev, cur) => prev + cur, 0);
	// Loop to add up array numbers
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		if (sum * 2 + nums[i] === total) {
			return i;
		}
		sum += nums[i];
	}
	return -1;
};
findMiddleIndex([1, 2, 3]); */

// R1-20230921; Hard
/* var findMiddleIndex = function (nums) {
	// Sum
	const total = nums.reduce((prev, cur) => prev + cur, 0);
	// LEARN: Loop to add up
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		if (2 * sum + nums[i] === total) {
			return i;
		}
		sum += nums[i];
	}
	return -1;
}; */

// 三版
/* var findMiddleIndex = function (nums) {
	const total = nums.reduce((prev, cur) => prev + cur, 0);
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		if (2 * sum + nums[i] === total) {
			return i;
		}
		sum += nums[i];
	}
	return -1;
}; */
// 二版：T= O(n), S = O(1), 细节需优化
/* var findMiddleIndex = function (nums) {
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
}; */

// 一版未完成-----------------------
/* var findMiddleIndex = function (nums) {
	let middleIndex;
	let length = nums.length;
	switch (length) {
		case (length = 1):
			return (middleIndex = 0);
		case (length = 2):
			if ((nums[length - 1] = 0)) {
				return (middleIndex = 0);
			} else {
				return -1;
			}
		case length > 2:
			for (let i = 0; i < length - 1; i++) {}
	}
}; */
