var majorityElement = function(nums) {
    let c = 0;
    let vote = 0;
    for(let i = 0; i < nums.length; i++) {
        if(vote == 0) {
            c = nums[i];
        }
        if(nums[i] !== c) {
            vote--;
        } else if(nums[i] == c) {
            vote++;
        }
    }
    return c;
};
