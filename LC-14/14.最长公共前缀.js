/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
/* 二版：124/124 cases passed (56 ms)
Your runtime beats 95.06 % of javascript submissions
Your memory usage beats 60.74 % of javascript submissions (41.3 MB) 
Time: O(n*log(n) + m); Space: O(1)*/
var longestCommonPrefix = function (strs) {
	if (strs.length === 0) {
		return "";
	}
	// 排序字符串数组，以便在比较时只需考虑第一个和最后一个字符串
	strs.sort();

	const firstStr = strs[0];
	const lastStr = strs[strs.length - 1];
	let prefix = "";

	// 比较第一个和最后一个字符串的字符
	for (let i = 0; i < firstStr.length; i++) {
		if (firstStr[i] === lastStr[i]) {
			prefix += firstStr[i];
		} else {
			break;
		}
	}

	return prefix;
};

// @lc code=end

//--------------------------------------
/* 一版：124/124 cases passed (68 ms)
Your runtime beats 56.43 % of javascript submissions
Your memory usage beats 36.93 % of javascript submissions (41.7 MB) 
Time: O(n^2); Space: O(1)*/

/* var longestCommonPrefix = function (strs) {
	let prefix = "";
	let match = "";
	for (let i = 0, j = 0; j < strs[i].length; j++) {
		for (i = 0; i < strs.length - 1; i++) {
			match = strs[i][j];
			if (match != strs[i + 1][j]) {
				return prefix;
			} else {
        break;
      }
		}
		prefix += match;
	}
	if (strs.length === 1) {
		return strs[0];
	}
	return prefix;
}; */

//---------------------------------------
// let strs = ["str", "st", "s"];
// longestCommonPrefix(strs);
// console.log(strs[0]);
// console.log(match);
// console.log(prefix);
// console.log(prefix + match);
// console.log(prefix);
