/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let threeSum = [];
	nums.sort((a, b) => a - b); // 升序排列

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			break;
		} else if (i > 0 && nums[i] === nums[i - 1]) {
			continue; // 去重
		}
		let target = -nums[i],
			left = i + 1,
			right = nums.length - 1;
		while (left < right) {
			if (nums[left] + nums[right] === target) {
				threeSum.push([nums[i], nums[left], nums[right]]);
				while (left < right && nums[left] === nums[left + 1]) {
					left++;
				}
				while (left < right && nums[right] === nums[right - 1]) {
					right--;
				}
				left++;
				right--;
			} else if (nums[left] + nums[right] > target) {
				right--;
			} else {
				left++;
			}
		}
	}
	return threeSum;
};
// threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
// @lc code=end

// 一版：不通过，思路 T = O(n^3), S = O()
/* var threeSum = function (nums) {
  let threeSum = [];
  for (
    let left = 0, right = 1;
    left < nums.length && right < nums.length;
    left++, right++
  ) {
    for (let fast = right + 1; fast < nums.length; fast++) {
      if (nums[left] + nums[right] + nums[fast] === 0) {
        threeSum.push([nums[left], nums[right], nums[fast]]);
      }
    }
  }
  return threeSum;
}; */
