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
/* 124/124 cases passed (68 ms)
Your runtime beats 56.43 % of javascript submissions
Your memory usage beats 36.93 % of javascript submissions (41.7 MB) */

var longestCommonPrefix = function (strs) {
	let prefix = "";
	let match = "";
	for (let i = 0, j = 0; j < strs[i].length; j++) {
		for (i = 0; i < strs.length - 1; i++) {
			match = strs[i][j];
			if (match != strs[i + 1][j]) {
				return prefix;
			}
		}
		prefix += match;
	}
	if (strs.length === 1) {
		return strs[0];
	}
	return prefix;
};
// @lc code=end

// let strs = ["str", "st", "s"];
// longestCommonPrefix(strs);
// console.log(strs[0]);
// console.log(match);
// console.log(prefix);
// console.log(prefix + match);
// console.log(prefix);
