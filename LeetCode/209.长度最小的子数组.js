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
// R8-20240217; Good; T = O(n), S = O(1)
var minSubArrayLen = function (target, nums) {
	let start = 0,sum=0, length=Infinity;
	// Sort Asc
	// nums.sort((a,b)=>a-b);
	for (let end = 0; end < nums.length; end++) {
		sum += nums[end];
		while(sum>=target){
			length = Math.min(length,end-start+1);
			sum-=nums[start];
			start++;
		}
		/* if(sum<target){
			continue;
		} */
	}
	return length===Infinity ? 0 : length;
}
// minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]);
// @lc code=end
// R7-20231209; Good; T = O(n), S = O(1)
/* var minSubArrayLen = function (target, nums) {
	let sum = 0, ans = Infinity, start = 0;
	for (let end = 0; end < nums.length; end++) {
		sum += nums[end];
		while (sum >= target) {
			ans = Math.min(ans, end-start+1);
			sum -= nums[start];
			start++;
		}
	}
	return ans===Infinity ? 0 : ans;
} */
// R6-20231208; Hard T = O(n), S = O(1)
/* var minSubArrayLen = function (target, nums) {
	let ans = Infinity,
		sum = 0,
		start = 0;
	for (let end = 0; end < nums.length; end++) {
		sum += nums[end];
		while (sum >= target) {
			ans = Math.min(ans, end-start+1)
			sum -= nums[start];
			start++;
		}
	}
	return ans === Infinity ? 0 : ans;
}; */
// R5-20231204; Hard T = O(n), S = O(1)
/* var minSubArrayLen = function (target, nums) {
	let start = 0,
		ans = Infinity,
		sum = 0;
	for (let end = 0; end < nums.length; end++) {
		sum += nums[end];
		while (sum >= target) {
			ans = Math.min(ans, end - start + 1);
			sum -= nums[start];
			start++;
		}
	}
	return ans === Infinity ? 0 : ans;
}; */
// R4-20231003; Good T = O(n), S = O(1)
// var minSubArrayLen = function (target, nums) {
// 	let sum = 0,
// 		start = 0,
// 		ans = Infinity;
// 	for (let end = 0; end < nums.length; end++) {
// 		sum += nums[end];
// 		while (sum >= target) {
// 			ans = Math.min(ans, end - start + 1);
// 			sum -= nums[start];
// 			start++;
// 		}
// 	}
// 	return ans === Infinity ? 0 : ans;
// };

// R3-20231001; Hard T = O(n), S = O(1)
/* var minSubArrayLen = function (target, nums) {
	let ans = Infinity,
		start = 0,
		sum = 0;
	for (let end = 0; end <= nums.length; end++) {
		sum += nums[end];
		while (sum >= target) {
			ans = Math.min(ans, end - start + 1);
			sum -= nums[start];
			start++;
		}
	}
	return ans === Infinity ? 0 : ans; // Use `===`, not `=`
}; */
// R2-20230930; Hard T = O(n), S = O(1)
/* var minSubArrayLen = function (target, nums) {
	let ans = Infinity,
		sum = 0,
		start = 0;
		for (let end = 0; end < nums.length; end++;){
			sum += nums[end];
			while (sum >= target){
				ans = Math.min(ans, end - start +1);
				sum -= nums[start];
				start++;
			}
		}
		return ans === Infinity ? 0:ans;
}; */
// R1-20230927; Good T = O(n), S = O(1)
/* var minSubArrayLen = function (target, nums) {
	let ans = Infinity,
		start = 0,
		sum = 0;
	for (let end = 0; end < nums.length; end++) {
		sum += nums[end];
		while (sum >= target) {
			ans = Math.min(ans, end - start + 1);
			sum -= nums[start];
			start++;
		}
	}
	return ans === Infinity ? 0 : ans;
}; */
// L1-20230926; Hard T = O(n), S = O(1)
/* var minSubArrayLen = function (target, nums) {
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
}; */

/* 	if (nums.length === 1 && nums[0] >= target) {
    return 1;
  } else if (nums.length === 1 && nums[0] < target) {
    return 0;
  } */
/*  else if 
   if (fast === 0