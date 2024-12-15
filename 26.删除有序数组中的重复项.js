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
// R8-20241215; Easy-1-Array-Rebuild
var removeDuplicates = function (nums) {
	let k = 1;
	for (let i = 1; i<=nums.length-1; i++) {
		if(nums[i]!==nums[i-1]){
			nums[k]=nums[i]; 
			k++;
		}
	}
	return k;
};

// @lc code=end

/* // R8-20241215; Easy
var removeDuplicates = function (nums) {
let slow = 0;
for (let fast = 1; fast<=nums.length-1; fast++) {
	if(nums[fast]!==nums[slow]){
		nums[slow+1]=nums[fast]; 
		slow++;
		}
	}
	return slow+1;
}; */
