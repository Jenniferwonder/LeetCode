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
// R7-20231204; Hard
var threeSum = function (nums) {
	let ans = [];
	// Sort Asc
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		// Corner case
		if (nums[i] > 0) {
			break;
		} else if (i > 0 && nums[i] === nums[i - 1]) {
			// Remove duplicates
			continue;
		}
		let left = i + 1,
			right = nums.length - 1,
			target = -nums[i];
		while (left < right) {
			if (nums[left] + nums[right] === target) {
				ans.push([nums[left], nums[right], nums[i]]);
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
	return ans;
};
// threeSum([-1, 0, 1, 2, -1]);
// @lc code=end
// R6-20231001; Good
// var threeSum = function (nums) {
// 	// Sort
// 	nums.sort((a, b) => a - b);
// 	// Output
// 	let ans = [];
// 	// Loop through the first number
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] > 0) {
// 			break;
// 		} else if (i > 0 && nums[i] === nums[i - 1]) {
// 			continue;
// 		}
// 		// Define the second and third numbers
// 		let left = i + 1, // NOTE: left != 0;
// 			right = nums.length - 1,
// 			target = -nums[i];
// 		while (left < right) {
// 			if (nums[left] + nums[right] === target) {
// 				ans.push([nums[left], nums[right], nums[i]]);
// 				while (left < right && nums[left] === nums[left + 1]) {
// 					left++;
// 				}
// 				while (left < right && nums[right] === nums[right - 1]) {
// 					right--;
// 				}
// 				left++;
// 				right--;
// 			} else if (nums[left] + nums[right] > target) {
// 				right--;
// 			} else {
// 				left++;
// 			}
// 		}
// 	}
// 	return ans;
// };
// R5-20230927; Good
/* var threeSum = function (nums) {
	// Sort
	nums.sort((a, b) => a - b);
	// Loop through the first number
	let ans = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			break;
		} else if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		let target = -nums[i],
			left = i + 1,
			right = nums.length - 1;
		while (left < right) {
			if (nums[left] + nums[right] === target) {
				ans.push([nums[left], nums[right], nums[i]]);
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
	return ans;
}; */
// R4-20230924; Good
/* var threeSum = function (nums) {
	// Define output
	let ans = [];
	// Sort asc
	nums.sort((a, b) => a - b);
	// Loop the first number
	for (let i = 0; i < nums.length; i++) {
		// Corner case
		if (nums[i] > 0) {
			break;
		} else if (i > 0 && nums[i] === nums[i - 1]) {
			continue; // Skip duplicates
		}
		// Define variables: left, right, target
		let left = i + 1,
			right = nums.length - 1,
			target = -nums[i];
		while (left < right) {
			if (nums[left] + nums[right] === target) {
				ans.push([nums[i], nums[left], nums[right]]);
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
	return ans;
}; */
// R3-20230923; Hard
/* var threeSum = function (nums) {
	// Define output
	let ans = [];
	// Sort asc
	nums.sort((a, b) => a - b);
	// NOTE: Loop the outer layer/ by the first number in the trinity
	for (let i = 0; i < nums.length; i++) {
		// NOTE: Corner cases and skip duplicates?
		if (nums[i] > 0) {
			// BUG: nums[0]
			break;
		} else if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		// NOTE: Get necessary variables based on i: left, right, target
		let left = i + 1, // BUG: left = nums[i+1]
			right = nums.length - 1,
			target = -nums[i];
		while (left < right) {
			if (nums[left] + nums[right] === target) {
				ans.push([nums[i], nums[left], nums[right]]);
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
	return ans;
}; */
// R2-20230921; Good
/* var threeSum = function (nums) {
	// Sort Asc
	nums.sort((a, b) => a - b);
	// Define output
	let ans = [];

	// Define first number loop
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			break;
		} else if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		// Define two pointers and target
		let target = -nums[i],
			left = i + 1, // NOTE: Notice left is not 1 or 0
			right = nums.length - 1;
		while (left < right) {
			if (nums[left] + nums[right] === target) {
				ans.push([nums[i], nums[left], nums[right]]); // NOTE: Push an array
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
	return ans;
}; */
// R1-20230920; Hard
/* var threeSum = function (nums) {
	// Sort Asc
	nums.sort((a, b) => a - b);

	// Define Ouput
	let ans = [];

	// Define first number loop
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			break;
		} else if (i > 0 && nums[i] === nums[i - 1]) {
			continue; // Skip same number
		}
		// Define two-Pointers and target
		let target = -nums[i],
			left = i + 1,
			right = nums.length - 1;
		// Define inner two pointers loop
		while (left < right) {
			if (nums[left] + nums[right] === target) {
				ans.push([nums[i], nums[left], nums[right]]);
				// Skip same number
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
	return ans;
}; */

// Testing Cases
// threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
// 二版
/* var threeSum = function (nums) {
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
}; */

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
