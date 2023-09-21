/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode.cn/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (45.19%)
 * Likes:    2129
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2.7M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 请必须使用时间复杂度为 O(log n) 的算法。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1,3,5,6], target = 2
 * 输出: 1
 *
 *
 * 示例 3:
 *
 *
 * 输入: nums = [1,3,5,6], target = 7
 * 输出: 4
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums 为 无重复元素 的 升序 排列数组
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// mi = middleIndex
var searchInsert = function (nums, target) {
	// Define two-pointers
	let left = 0,
		right = nums.length - 1;
	// Binary search: left <= right
	while (left <= right) {
		let mi = Math.trunc((left + right) / 2);
		if (nums[mi] === target) {
			return mi;
		} else if (nums[mi] < target) {
			left = mi + 1;
		} else {
			right = mi - 1;
		}
	}
	return left;
};
// @lc code=end

// AC-v2.0 （优化后，耗时击败 26.24%, Memory 击败 95%）
/* var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let mi = Math.trunc((left + right) / 2);
		if (target === nums[mi]) {
			return mi;
		} else if (target < nums[mi]) {
			right = mi - 1;
		} else if (target > nums[mi]) {
			left = mi + 1;
		}
	}
	return left;
}; */

// AC-v1.0 (代码不简洁，有瑕疵，耗时仅击败 10%, Memory 击败 70%)----------------------------------------------
/* var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let mi = Math.trunc((left + right) / 2);
		if (target === nums[mi]) {
			return mi;
		} else if (target < nums[mi]) {
			// right = mi - 1;
			if (target <= nums[left]) {
				return left;
			} else {
				left = left + 1;
				right = mi - 1;
			}
		} else if (target > nums[mi]) {
			// left = mi + 1;
			if (target === nums[right]) {
				return right;
			} else if (target > nums[right]) {
				return right + 1;
			} else {
				left = mi + 1;
				right = right - 1;
			}
		}
	}
	if (left === right) {
		if (target <= nums[left]) {
			return left;
		} else return right + 1;
	} else
	return left;
}; */

// 基于上一版微调后再尝试------------------------------------------------------------------
// Output: undefined
/* var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let mid = (left + right) / 2;
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] < target) {
			left = mid + 1;
			if (target === nums[right]) {
				return right;
			} else {
				if (target > nums[right]) {
					return right + 1;
				} else {
					right = right - 1;
					if (left > right) {
						return left;
					} else if (left === right) {
						if (target <= nums[left]) {
							return left;
						} else return right + 1;
					}
				}
			}
		} else {
			right = mid - 1;
		}
	}
	return left;
}; */

// 首次绘图后尝试-----------------------------------------------------------------------------------
// Output: undefined
/* var searchInsert = function (nums, target) {
	let index;
	for (let len = nums.length; len >= 1; len = Math.trunc(len / 2)) {
		let left = 0;
		let right = len - 1;
		let mi = Math.trunc((left + right) / 2);
		switch (target) {
			case target === nums[mi]: {
				index = mi;
				break;
			}
			case target < nums[mi]: {
				if (target <= num[left]) {
					index = left;
				} else {
					left = left + 2;
					right = mi - 1;
					if (left > right) {
						index = left;
					} else if (left === right) {
						if (target <= nums[left]) {
							index = left;
						} else {
							index = right + 1;
						}
					}
				}
				break;
			}
			case target > nums[mi]: {
				if (target === nums[right]) {
					index = right;
				} else {
					if (target > nums[right]) {
						index = right + 1;
					} else {
						left = mi + 1;
						right = right - 1;
						if (left > right) {
							index = left;
						} else if (left === right) {
							if (target <= nums[left]) {
								index = left;
							} else index = right + 1;
						}
					}
				}
				break;
			}
		}
	}
	return index;
}; */

// 确定第一版循环结构 ---------------------------------------------
/* var searchInsert = function (nums, target) {
	let len = nums.length;
	let maxLen = nums.length;
	for (
		mi = Math.trunc(len / 2);
		len >= 1 && mi < maxLen;
		len = Math.trunc(len / 2)
	) {
		if (nums[mi] === target) {
			return mi;
		} else if (nums[mi] > target) {
			if (nums[0] >= target) {
				mi = 0;
			} else if (mi - 1 === 0) {
				mi = mi - 1;
			} else if ((nums[mi - 1] = target)) {
				mi = mi - 1;
			} else if (nums[mi - 1] > target) {
				mi = Math.trunc(mi / 2);
			}
		} else if (nums[mi] < target) {
			if ((nums[maxLen - 1] = target)) {
				mi = maxLen - 1;
			} else if (nums[maxLen - 1] < target) {
				mi = maxLen;
			} else if ((nums[mi + 1] = target)) {
				mi = mi + 1;
			} else {
				mi = Math.trunc((mi + len) / 2);
			}
		}
	}
	return mi;
}; */

// 片段草稿 -----------------------------------------------------------------------------------
// else
// if (mi === maxLen - 1 && maxLen != 2) {
//   mi = mi;
// } else if (mi === len - 1) {
//   mi = 0;
// }

// else if (nums[mi] < target && mi === len) {
//   mi = mi + 1;
// } else if (nums[mi] < target && mi === maxLen - 1) {
//   mi = mi + 1;
// } else {
//   mi = Math.trunc((mi + len) / 2);
// }
// } else if (mi === maxLen - 1) {
// mi = mi + 1; // mi = mi + Math.floor(mi / 2); // Math.trunc((mi + len) / 2)
// }

// 循环结构尚未确定-------------------------------------------------------------------------------
// let zi = 0;
// let mi = Math.trunc(zi + len/2);
// if (nums[mi] >= target) {
//   return mi;
// } else  {
//   return mi + 1;
// }
// switch (len) {
//   case len = 1:
//     if (nums[zi] >= target) {
//       return zi;
//     } else return zi + 1;
//   case len > 1:
//     While (len > 1){
//       let mi = Math.trunc(zi + len/2);
//       if (nums[mi] = target) {
//         return mi;
//       } else if (nums[mi] > target) {
//         return
//         len = len / 2;
//         mi = Math.trunc(zi + len/2)
//       } else {
//         len = len / 2;
//         zi = mi
//         mi = Math.trunc(zi + len/2)
//       }
//       len = len/2;
//     }
// }
// switch (mi) {
//   case mi < 1:
//   if (nums[zi] >= target) {
//     return zi;
//   } else return zi + 1;
//   case mi >= 1:
//     if (nums[mi] = target) {
//       return mi;
//     } else if (nums[mi] > target) {
//       len = len / 2;
//       mi = Math.trunc(zi + len/2)
//     } else {
//       len = len / 2;
//       zi = mi
//       mi = Math.trunc(zi + len/2)
//     }
// }

// 开题思路-----------------------------------------------------------------------------------
// case 1: target in nums, return targetIndex
// case 2: target not in nums, insert it in nums to make nums an array in asc order

// How to compare target with middleIndex element?
// tar > middleEl,
// tar < middleEl,
// tar = middleEl,

// [2, 4, 5, 6, 7, 8, 10, 12]  1, 2, 3, 8, 9, 13      // [1, 3, 5, 6] 5, 2, 7
// [2, 4, 5, 6] 1, 2, 3, 7
// [2, 4] 1, 2, 3, 4, 5
// [2] 1, 2, 3

// len = 8, 4, 2, 1;
// if (len === 1)
// if (nums[zi] >= target) return zi;
// else return zi+1
// else
// len = len/2 = 4, 1, 2
// if (len === 1)
// if (nums[zi] >= target) return zi;
// else if (nums[zi] < nums[len-1]) return (zi + 1);
// else return (len - 1)
// else
// ~~mi1 = Math.trunc(zi + len/2) = 4, 1~~
// ~~zi = 0, || zi = mi1 = 4~~
// if (nums[len] === target) return len
// else if (nums[len] > target)
// len = len/2 = 2, 1
// if (len === 1)
// if (nums[zi] >= target) return zi;
// else if (nums[len] >= target) return len;
// else return len + 1;
// else
// zi = len;
// len = len/2 = 2, 1
// if (len === 1)
// if (nums[zi] >= target) return zi;
// else if (nums[zi+1] >= target) return zi+1;
// else return zi + 2;
// if (len === 1)
// if (nums[zi] >= target) return zi;
// else if (nums[zi] < nums[len-1]) return (zi + 1);
// else return (len - 1)
// else
// len = len/2 = 1
// mi3 = Math.trunc(zi + len/2) = 1, 5, 7
// if (nums[mi1] != target)
// m = 7 > 1, 7 > 3, || 7 < 9, 7 < 13,
// m = 4 > 1, 4 > 2, 4 > 3 || 4 < 5
// if (nums[mi2] != target)
// m = 5 > 1, 5 > 3, || 10 > 8, 10 > 9, || 10 < 13,
// if (nums[mi3] != target)
// m = 4 > 1, 4 > 3, || 8 = 8, 8 < 9 || 12 < 13
// mi4 = zi = 0, || zi = mi1 = 4 || zi = mi2 = 6
// nums[zi] = 2 = 2, return zi/0;
// nums[zi] = 2 > 1, return zi/0;
// nums[zi] = 2 < 3, return zi + 1/1;
// nums[zi] = 8 < 9, return mi3+1(mi2)/6;
// nums[zi] = 12 < 13, return mi3/7;
// else return mi3, 8 = 8, return mi3/5;
// else return mi2
// else return mi1
// mi2 = Math.trunc(zi + len/2) = 2, 6
// zi = 0, || zi = mi1 = 4 || zi = mi2 = 6
