/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// Review #1 20230919;
var removeElement = function (nums, val) {
	// Two-Pointers
	let slow = 0;
	for (let fast = 0; fast < nums.length; fast++) {
		if (nums[fast] !== val) {
			nums[slow] = nums[fast];
			slow++;
		}
	}
	return slow;
};
// @lc code=end

// Testing Cases
// let nums = [3, 2, 2, 3],
// 	val = 3;
// removeElement(nums, val);

// 三版：双指针法（左右指针）
/* var removeElement = function (nums, val) {
	let left = 0,
		right = nums.length;
	while (left < right) {
		if (nums[right - 1] === val) {
			right--;
		} else if (nums[left] === val) {
			nums[left] = nums[right - 1];
			right--;
		} else {
			left++;
		}
	}
	return left;
}; */

// 二版：双指针法 (快慢指针)
/* var removeElement = function (nums, val) {
	let slow = 0;
	// 依次对比 val 与数组元素的值
	for (let fast = 0; fast < nums.length; fast++) {
		if (nums[fast] !== val) {
			nums[slow] = nums[fast];
			slow++;
		}
	}
	// 返回数组长度
	return slow;
}; */

// 一版：用数组移除方法 shift/ pop 不管用，因为元素位置未必在首位或末位
/* var removeElement = function (nums, val) {
  // 依次对比 val 与数组元素的值
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.shift(nums[i]);
      console.log(nums);
      i--;
    }
  }
  // 返回数组长度
  console.log(nums.length);
  return nums.length;
}; */

/* for (let i = 0; i < nums.length; i++) {
  if (nums[i] == val) {
    nums.shift(nums[i]);
    i--;
  }
} */

/* nums.forEach((num) => {
  if (num === val) {
    nums.shift(num);
  }
}); */
