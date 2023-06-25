/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 2 pointers
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

// Sort 
var merge = function(nums1, m, nums2, n) {
    if(m == 0 ) {
        for(let i = 0; i < n; i ++) {
            nums1[i] = nums2[i]
        }
    }

    let x = 0;
    if(n != 0) {
        for(let i = m; i < m + n; i++) {
            nums1[i] = nums2[x]
            x++;
        }
    }
    nums1.sort(function(a,b){return a - b})
};
