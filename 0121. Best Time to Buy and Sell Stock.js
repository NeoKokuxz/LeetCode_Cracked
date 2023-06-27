/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let lowest = 0; //Position
  let maxProfit = 0;

  for(let i = 1; i < prices.length; i++) {
    if(prices[lowest] > prices[i]) {
      lowest = i
    }
    maxProfit = Math.max(maxProfit, prices[i] - prices[lowest])
  }

  return maxProfit

};
