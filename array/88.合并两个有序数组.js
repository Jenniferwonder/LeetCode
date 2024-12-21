/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//TODO: 
var merge = function (nums1, m, nums2, n) {
	let slow = 0;
	for (let fast = 0; fast < m + n; fast++) {
		if (nums1[fast] > nums2[slow]) {
			nums1[m + slow] = nums1[fast];
			nums1[fast] = nums2[slow];
			slow++;
		} else if (nums1[fast] <= nums2[slow] && fast < m) {
			continue;
		} else if (nums1[fast] === 0 && fast >= m) {
			nums1[fast] = nums2[slow];
			slow++;
		}
	}
	return nums1;
};
/* let nums1 = [4, 5, 6, 0, 0, 0],
	m = 3,
	nums2 = [1, 2, 3],
	n = 3; */
/* let nums1 = [1, 2, 3, 0, 0, 0],
	m = 3,
	nums2 = [2, 5, 6],
	n = 3; */
/* let nums1 = [1, 2, 4, 5, 6, 0],
	m = 5,
	nums2 = [3],
	n = 1;
merge(nums1, m, nums2, n); */
// @lc code=end
