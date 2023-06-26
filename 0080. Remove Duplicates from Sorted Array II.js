/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pointer = 0; //Starting position
    let count = 1; //Count for the initial position
    for(let i = 1; i < nums.length; i++) {
        //If current one match the previous one
        //And count less than 2 - replace
        if(nums[pointer] == nums[i] && count < 2) {
            //Increase pointer position and count
            pointer+=1;
            count+=1;
            nums[pointer] = nums[i]
        }
        //If unique, put into pointer + 1 and reset count to 1
        if(nums[pointer] != nums[i]) {
            pointer+=1;
            count = 1;
            nums[pointer] = nums[i]
        }
    }
    return pointer + 1;
};
