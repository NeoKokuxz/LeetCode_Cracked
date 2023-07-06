/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1) //Flip the whole array first
    // Flip 0 -> K - 1
    reverse(nums, 0, k - 1)
    // Flip K - nums.length - 1
    reverse(nums, k, nums.length - 1)
};

var reverse = function (nums, start, end) {
    let i = start;
    let j = end;

    while( i < j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp;
        i++;
        j--;
    }
}
