/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// L1-20230926; Hard T = O(n), S = O(1)
var minSubArrayLen = function (target, nums) {
	let slow = 0,
		ansPrev = 0,
		ansCur = 0,
		sum = 0;
	for (let fast = 0; fast < nums.length; fast++) {
		sum += nums[fast];
		while (sum >= target) {
			if (ansPrev > 0) {
				ansCur = fast - slow + 1;
				ansPrev = Math.min(ansCur, ansPrev);
			} else if (ansPrev === 0) {
				ansPrev = fast - slow + 1;
			}
			sum -= nums[slow];
			slow++;
		}
	}
	return ansPrev;
};
// minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]);
// @lc code=end

/* 	if (nums.length === 1 && nums[0] >= target) {
    return 1;
  } else if (nums.length === 1 && nums[0] < target) {
    return 0;
  } */
/*  else if 
   if (fast === 0 && sum>=target){
     return 1
   } */
