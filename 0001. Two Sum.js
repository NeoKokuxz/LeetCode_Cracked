/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// O(n)
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

// O(n^2)
var twoSum = function(nums, target) {
    let res = []
    for(var i = 0; i < nums.length; i++) {
        let lookFor = target - nums[i];
        for(var j = i + 1; j < nums.length; j++) {
            if(lookFor == nums[j]) {
                res.push(i);
                res.push(j);
            }
        }
    }
    return res;
};
