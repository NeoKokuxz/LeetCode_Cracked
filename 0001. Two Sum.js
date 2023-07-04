/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();
    for( n in nums ) {
        let curr = nums[n]
        let currTarget = target - curr
        if(numMap.has(currTarget)) {
            return [n, numMap.get(currTarget)]
        } else {
            numMap.set(curr, n)
        }
    }
};
