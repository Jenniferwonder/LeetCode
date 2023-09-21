/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// R2-20230920; Hard
var maxProfit = function (prices) {
	// minPrice, maxProfit
	let minPrice = prices[0],
		maxProfit = 0;
	for (let i = 1; i < prices.length; i++) {
		minPrice = Math.min(minPrice, prices[i]);
		maxProfit = Math.max(maxProfit, prices[i] - minPrice);
	}
	return maxProfit;
};

// @lc code=end
// R1-20230919; Hard
/* var maxProfit = function (prices) {
	// minPrice, currentPrice(prices[i])
	let maxProfit = 0,
		minPrice = prices[0];
	// if (prices.length < 2) {
	// 	return maxProfit;
	// }
	for (let i = 1; i < prices.length; i++) {
		minPrice = Math.min(minPrice, prices[i]);
		maxProfit = Math.max(maxProfit, prices[i] - minPrice);
	}
	return maxProfit;
}; */

// 一版：用 if 判断最低价格，也可用 min
/* var maxProfit = function (prices) {
	if (prices.length < 2) {
		return 0;
	}
	// 初始化最低价格和最大利润
	let cost = prices[0],
		maxProfit = 0;

	// 遍历价格数组
	for (let i = 1; i < prices.length; i++) {
		// 如果当前价格比之前记录的最低价格还低，更新最低价格
		if (prices[i] < cost) {
			cost = prices[i];
		} else {
			// 否则，计算当前卖出时的利润，并更新最大利润
			maxProfit = Math.max(maxProfit, prices[i] - cost);
		}
	}
	return maxProfit;
}; */

// 二版：用 min 判断最低价格
/* var maxProfit = function (prices) {
	if (prices.length < 2) {
		return 0;
	}
	// 初始化最低价格和最大利润
	let minPrice = prices[0],
		maxProfit = 0;

	// 遍历价格数组
	for (let i = 1; i < prices.length; i++) {
		minPrice = Math.min(minPrice, prices[i]);
		maxProfit = Math.max(maxProfit, prices[i] - minPrice);
		}
	}
	return maxProfit;
}; */
