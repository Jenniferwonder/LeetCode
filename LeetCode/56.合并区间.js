/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// R3-20230923; Good
var merge = function (intervals) {
	// Corner cases?
	// Define output
	let ans = [];
	// Sort asc by the first number of each interval
	intervals = intervals.slice().sort((a, b) => a[0] - b[0]);
	// Get necessary variables before the loop
	let prev = intervals[0];
	// Loop through intervals and deconstructive declaration
	for (let cur of intervals) {
		const [prevStart, prevEnd] = prev;
		const [curStart, curEnd] = cur;
		if (curStart > prevEnd) {
			ans.push(prev);
			prev = cur;
		}
		prev[1] = Math.max(prevEnd, curEnd);
	}
	ans.push(prev);
	return ans;
};
// @lc code=end
// R2-20230922; Hard
/* var merge = function (intervals) {
	// NOTE: Corner case? No. All will be covered in the loop

	// NOTE: Sort Asc by the first number of each interval without changing the original array (which need to reasign the value to intervals)
	intervals = intervals.slice().sort((a, b) => a[0] - b[0]);
	// NOTE: Define output and get prev interval before the loop
	let ans = [],
		prev = intervals[0];
	// Compare prev and cur interval
	for (const cur of intervals) {
		const [curStart, curEnd] = cur;
		const [prevStart, prevEnd] = prev;
		if (curStart > prevEnd) {
			ans.push(prev);
			prev = cur;
		} else {
			prev[1] = Math.max(prevEnd, curEnd); // NOTE: Can't use preEnd here and should only use prev[1], to reasign value outside the loop
		}
	}
	ans.push(prev);
	return ans;
}; */

// Testing Case
/* let intervals = [
	[4, 5],
	[1, 4],
];
merge(intervals); */

// R1-20230921; Hard
/* var merge = function (intervals) {
	// LEARN: Sort Asc by first number of the intervals without changing the original intervals (which need to reasign the value to intervals)
	intervals = intervals.slice().sort((a, b) => a[0] - b[0]);
	// Define output
	let ans = [];
	// LEARN: Compare current interval with previous interval
	let prev = intervals[0];
	for (const cur of intervals) {
		const [curStart, curEnd] = cur;
		const [prevStart, prevEnd] = prev;
		if (curStart > prevEnd) {
			ans.push(prev);
			prev = cur;
		} else {
			prev[1] = Math.max(prevEnd, curEnd);
		}
	}
	ans.push(prev);
	return ans;
}; */

/* 二版无注释版：T = O(nlogn) S = O(n)*/
/* var merge = function (intervals) {
	intervals = intervals.slice().sort((a, b) => a[0] - b[0]);
	let merged = [];
	let prev = intervals[0];
	for (const currentInterval of intervals) {
		const [curStart, curEnd] = currentInterval;
		const [prevStart, prevEnd] = prev;
		if (curStart > prevEnd) {
			merged.push(prev);
			prev = currentInterval;
		} else {
			prev[1] = Math.max(prevEnd, curEnd);
		}
	}
	merged.push(prev);
	return merged;
}; */

/* 二版：--------------------------------------------------------
1. 不修改原始输入参数的排序
2. 简化代码，增强循环条件与变量名可读性
3. 解构赋值，可更清晰的处理区间起终点; 
4. 循环结构中的变量声明用 const 而不是 let 符合最佳实践与代码规范，可防止意外修改

var merge = function (intervals) {
	// 将列表中的区间按左端点升序排列
	intervals = intervals.slice().sort((a, b) => a[0] - b[0]);

	// 定义返回的新区间数组，及待加入的区间
	let merged = [];
	let prev = intervals[0];

	for (const currentInterval of intervals) {
		const [curStart, curEnd] = currentInterval;
		const [prevStart, prevEnd] = prev;

		// 若当前区间的首位大于待加入区间的末位，则两区间无重合可能
		if (curStart > prevEnd) {
			// 将上个待加入区间推入区间数组，注意不是推入 cur
			merged.push(prev);

			// 更新待加入区间为当前区间
			prev = currentInterval;
		} else {
			// 对比两区间，取末位最大值更新待加入区间
			prev[1] = Math.max(prevEnd, curEnd);
		}
	}
	// 最后一个待加入区间
	merged.push(prev);
	return merged;
}; */

/* 一版：----------------------------------------------------
1. 修改了原始输入参数；
2. 循环语法不够简化、可读性可优化；
3. 赋值与变量名可优化
var merge = function (intervals) {
	intervals = intervals.sort((a, b) => a[0] - b[0]);
	let merged = [];
	let prev = intervals[0];

	for (let i = 0; i < intervals.length; i++) {	
		let cur = intervals[i]; 
		if (cur[0] > prev[1]) {
			merged.push(prev);
			prev = cur;
		} else {
			prev[1] = Math.max(prev[1], cur[1]);
		}
	}
	merged.push(prev);
	return merged;
};*/
