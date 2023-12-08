/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// R5: 20231208; East; Binary Search T = O(log(n)), S = O(1)
var search = function (nums, target) {
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		let mid = Math.trunc((left + right) / 2);
		if (target === nums[mid]) {
			return mid;
		} else if (target > nums[mid]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
};
// search([-1, 0, 3, 5, 9, 12], 12);
// @lc code=end
// R4: 20231204; Good; Binary Search T = O(log(n)), S = O(1)
/* var search = function (nums, target) {
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		let mid = Math.trunc((left + right) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] > target) {
			right=mid-1;
		} else {
			left=mid+1;
		}
	}
	return -1;
}; */
// R3: 20231127; Good; Binary Search T = O(log(n)), S = O(1)
// var search = function (nums, target) {
// 	let left = 0,
// 		right = nums.length - 1;
// 	while (left <= right) {
// 		let mid = Math.trunc((left + right) / 2);
// 		if (nums[mid] === target) {
// 			return mid;
// 		} else if (nums[mid] < target) {
// 			left = mid + 1;
// 		} else {
// 			right = mid - 1;
// 		}
// 	}
// 	return -1;
// };
// R2: 20231001 Binary Search T = O(log(n)), S = O(1)
// var search = function (nums, target) {
// 	let left = 0,
// 		right = nums.length - 1;
// 	while (left <= right) {
// 		let mi = Math.trunc((left + right) / 2);
// 		if (nums[mi] === target) {
// 			return mi;
// 		} else if (nums[mi] > target) {
// 			right = mi - 1;
// 		} else {
// 			left = mi + 1;
// 		}
// 	}
// 	return -1;
// };
// R1: 20230927 Binary Search T = O(log(n)), S = O(1)
/* var search = function (nums, target) {
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		mid = Math.trunc((left + right) / 2);
		if (target === nums[mid]) {
			return mid;
		} else if (target > nums[mid]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}; */
// L1: 20230925 Binary Search T = O(log(n)), S = O(1)
/* var search = function (nums, target) {
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		let mi = Math.trunc((left + right) / 2);
		if (nums[mi] === target) {
			return mi;
		} else if (nums[mi] > target) {
			right = mi - 1;
		} else {
			left = mi + 1;
		}
	}
	return -1;
}; */

// L1: 20230925 Hash Table T = O(n), S = O(n)
/* var search = function (nums, target) {
	let dic = {};
	for (let i = 0; i < nums.length; i++) {
		dic[nums[i]] = i;
		if (dic.hasOwnProperty(target)) {
			return dic[target];
		}
	}
	return -1;
}; */
