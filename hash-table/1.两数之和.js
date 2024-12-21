/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// R6-20241018; Good
var twoSum = (nums, target) => {
	const dict = {};
	for (let i = 0; i < nums.length; i++) {
		if (dict.hasOwnProperty(target - nums[i])) {
			return [dict[target - nums[i]], i];
		} else {
			dict[nums[i]] = i;
		}
	}
	return [];
};
// @lc code=end
// R5-20240217; Good;
// var twoSum = function (nums, target) {
// 	let dict = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		if (dict.hasOwnProperty(target - nums[i])) {
// 			return [i, dict[target - nums[i]]];
// 		} else {
// 			dict[nums[i]] = i;
// 		}
// 	}
// 	return [];
// };
// R4 - 20231128; Good;
/* var twoSum = function (nums, target) {
	let dic = {};
	for (let i = 0; i < nums.length; i++) {
		if (dic.hasOwnProperty(target - nums[i])) {
			return [dic[target - nums[i]], i];
		} else {
			dic[nums[i]] = i;
		}
	}
	return [];
}; */
// R3 - 20231127; Hard;
// var twoSum = function (nums, target) {
// 	let dic = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		if (dic.hasOwnProperty(target - nums[i])) {
// 			return [dic[target - nums[i]], i];
// 		} else {
// 			dic[nums[i]] = i;
// 		}
// 	}
// 	return [];
// };

// R2-20230925; Good
// var twoSum = function (nums, target) {
// 	let dic = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		if (dic.hasOwnProperty(target - nums[i])) {
// 			return [dic[target - nums[i]], i];
// 		} else {
// 			dic[nums[i]] = i;
// 		}
// 	}
// 	return [];
// };

// R1-20230920; Hard
// Hash table
/* var twoSum = function (nums, target) {
	let dic = {};
	for (let i = 0; i < nums.length; i++) {
		// LEARN：.hasOwnProperty
		if (dic.hasOwnProperty(target - nums[i])) {
			return [dic[target - nums[i]], i];
		} else {
			// LEARN：对象赋值法
			dic[nums[i]] = i;
		}
	}
	return [];
}; */

// 四版(最优)：用对象模拟哈希表，T = O(n), S = O(n)
/* var twoSum = function (nums, target) {
	const numToIndex = {}; // 使用对象模拟哈希表

	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];

		if (numToIndex.hasOwnProperty(diff)) {
			return [numToIndex[diff], i];
		}

		numToIndex[nums[i]] = i;
	}
	return [];
};
 */

// 三版：用哈希表 new Map()，T = O(n), S = O(n)
/* var twoSum = function (nums, target) {
  // 创建一个空的哈希表（字典），用于存储每个元素及其对应的索引。
  const numToIndex = new Map();

  // 遍历数组 nums
  for (let i = 0; i < nums.length; i++) {
    // 计算目标值 target 与 nums[i] 的差值 diff
    const diff = target - nums[i];

    // 检查差值 diff 是否已经存在于哈希表中
    if (numToIndex.has(diff)) {
      // 若存在，说明找到了满足条件的两个数，返回其索引
      return [numToIndex.get(diff), i];
    }
    // 若否，将当前元素 nums[i] 与其索引 i 存入哈希表中，以备后续查找
    numToIndex.set(nums[i], i);
  }
  return [];
}; */

// 二版纠正：注意 j 不能赋值为 1， 而应是 j = i + 1
/* var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let firstNum = nums[i];
      let secondNum = nums[j];
      if (firstNum + secondNum === target) {
        return [i, j];
      }
    }
  }
}; */

// 二版：依然会返回重复元素, 注意 j 不能赋值为 1， 而应是 j = i + 1
/* var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
			let firstNum = nums[i];
			let secondNum = nums[j];
			if (firstNum + secondNum === target) {
				return [i, j];
			}
		}
	}
}; */
// let nums = [2,5,5,11];
// let target = 10;
// twoSum(nums, target);

// 一版：会返回重复元素
/* var twoSum = function (nums, target) {
	for (let firstNum of nums) {
		for (let secondNum of nums) {
			if (firstNum + secondNum === target) {
				console.log([nums.indexOf(firstNum), nums.indexOf(secondNum)]);
				return [nums.indexOf(firstNum), nums.indexOf(secondNum)];
			}
		}
	}
}; */
