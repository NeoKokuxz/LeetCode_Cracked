/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Set pointers to the end of both array
    let p1 = m - 1; // Last position of the nums1
    let p2 = n - 1; // Last position of the nums2

    let lp = m + n - 1 //At the end of the nums1 array

    while(p2 >= 0) {
        if(p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[lp] = nums1[p1]
            p1--;
        } else {
            nums1[lp] = nums2[p2]
            p2--
        }
        lp--
    }
};
