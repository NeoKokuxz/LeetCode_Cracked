/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length<0){
        return 0
    }
    let num = 0 ;
    for (let i = 0; i<nums.length; i++ ){
        num^=nums[i]
    }
    return num
};

// ^= XOR
